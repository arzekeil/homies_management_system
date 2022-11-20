from sqlalchemy import Boolean, Column, Integer, Float, String, Date

from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    firstName = Column(String)
    lastName = Column(String)
    icon = Column(String)
    color = Column(String)


class Todo(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    dueDate = Column(Date)
    userId = Column(String, index=True)
    isCompleted = Column(Boolean)


class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    date = Column(Date)
    userId = Column(Integer, index=True)
    description = Column(String)


class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Integer)
    title = Column(String)
    date = Column(Date)
    transactionId = Column(Integer, index=True)
    userId = Column(Integer, index=True)
    paid = Column(Boolean)


class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, index=True)
    userId = Column(Integer, index=True)
    amountOwed = Column(Float)
    paid = Column(Boolean)
