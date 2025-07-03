from abc import ABC, abstractmethod

class  Message(ABC):
     @abstractmethod
     def mensagem():
          pass

class Createmessage(Message):
     def mensagem():
          return  'Hello Word, Oi pai!'