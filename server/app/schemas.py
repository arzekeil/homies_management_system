from pydantic import BaseModel


class Payment(BaseModel):
    amount: int
    title: str
    date: str
    transactionId: int
    userId: int
    paid: bool


class User(BaseModel):
    firstName: str
    lastName: str
    icon: str
    color: str


class ToDo(BaseModel):
    title: str
    dueDate: str
    userId: str
    isCompleted: bool


class Post(BaseModel):
    title: str
    date: str
    userId: int
    description: str
