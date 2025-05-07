from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorDatabase
from app.schemas.users import UserUpdateSchema
from app.models.user import get_user_collection
from fastapi import HTTPException

async def update_user(db: AsyncIOMotorDatabase, user_id: str, user_data: UserUpdateSchema):
    user_collection = get_user_collection(db)

    try:
        obj_id = ObjectId(user_id)
    except:
        raise HTTPException(status_code=400, detail={"success": False, "message": "Invalid user ID"})

    
    update_data = {k: v for k, v in user_data.dict(exclude_unset=True).items()}
    update_data.update(user_data.extra_fields) 

    if not update_data:
        raise HTTPException(status_code=400, detail={"success": False, "message": "No data provided to update"})

    existing_user = await user_collection.find_one({"_id": obj_id})
    if not existing_user:
        raise HTTPException(status_code=404, detail={"success": False, "message": "User not found"})

    existing_data = {k: existing_user.get(k) for k in update_data.keys()}
  
    if existing_data == update_data:
         return format_user(existing_user) 

    
    result = await user_collection.update_one(
        {"_id": obj_id},
        {"$set": update_data}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=500, detail={"success": False, "message": "Error updating user"})

    updated_user = await user_collection.find_one({"_id": obj_id})
    updated_user["_id"] = str(updated_user["_id"])

    return format_user(updated_user)


def format_user(user: dict) -> dict:
    if not user:
        return None
    user["_id"] = str(user["_id"])
    return user


async def get_user_by_id(db: AsyncIOMotorDatabase, user_id: str):
    user_collection = get_user_collection(db)

    try:
        obj_id = ObjectId(user_id)
    except:
        raise HTTPException(status_code=400, detail={"success": False, "message": "Invalid user ID"})

    user = await user_collection.find_one({"_id": obj_id})
    return format_user(user)
