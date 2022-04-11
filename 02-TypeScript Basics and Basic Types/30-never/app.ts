function generateError(message: string, code: number): never {
  throw { message, errorCode: code }
  //   while (true) {}
}

generateError("an error occurred!", 500)
