from sqlalchemy import Boolean, Column, Integer, String, Date

from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    firstName = Column(String, index=True)
    lastName = Column(String, index=True)
    icon = Column(String, index=True)
    color = Column(String, index=True)

class Todo(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    dueDate = Column(Date, index=True)
    userId = Column(String, index=True)
    isCompleted = Column(Boolean, index=True)


class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    date = Column(Date, index=True)
    userId = Column(Integer, index=True)
    description = Column(String, index=True)


class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Integer, index=True)
    title = Column(String, index=True)
    date = Column(Date, index=True)
    transactionId = Column(Integer, index=True)
    userId = Column(Integer, index=True)
    paid = Column(Boolean, index=True)


class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    userId = Column(Integer, index=True)
