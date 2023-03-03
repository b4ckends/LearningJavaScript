// Falsey values

Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false

// Truthy values

Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true

// All value which its not false its truthy including the empty structures of arrays and objects

Boolean([]) // true
Boolean({}) // true