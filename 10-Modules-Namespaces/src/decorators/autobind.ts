namespace App {
  export function AutoBind(
    _target: any,
    _name: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        return originalMethod.bind(this)
      },
    }
    return adjDescriptor
  }
}
