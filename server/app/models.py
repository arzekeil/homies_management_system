from sqlalchemy import Boolean, Column, Integer, String, Date, ForeignKey
# from sqlalchemy.orm import relationship

from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    icon = Column(String, index=True)
    color = Column(String, index=True)

class Todo(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    due_date = Column(Date, index=True)
    assigned_to = Column(String, index=True)
    is_completed = Column(Boolean, index=True)

class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    date = Column(Date, index=True)
    authorId = Column(Integer, index=True, ForeignKey=True)
    description = Column(String, index=True)

#   id: 1,
#     title: "Should we get a house pet?? OwO",
#     date: "2022-11-19",
#     authorId: 2,
#     description: "I think we should get a cat :3",
#     tags: ["discussion"],
#   },