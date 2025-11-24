# TypeScript Learning Project

A comprehensive TypeScript learning repository covering fundamental to advanced concepts with practical examples.

## 📋 Overview

This project demonstrates core TypeScript concepts through hands-on examples, including type annotations, interfaces, classes, generics, and more. The code is compiled to both Node.js and browser-compatible JavaScript formats.

## 🗂️ Project Structure

```
├── app.ts                      # Main TypeScript source file
├── app.d.ts                    # TypeScript declaration file
├── index.html                  # HTML entry point
├── favicon.ico                 # Site favicon
├── tsconfig.json               # TypeScript compiler configuration
├── tsconfig.base.json          # Base TypeScript configuration
├── tsconfig.browser.json       # Browser-specific TypeScript config
├── tsconfig.node.json          # Node.js-specific TypeScript config
├── package.json                # Project dependencies
├── package-lock.json           # Locked dependencies
└── dist/                       # Compiled output
    ├── browser/                # Browser-compatible JavaScript
    │   └── app.js
    └── node/                   # Node.js-compatible JavaScript
        └── app.js
```

## 🎯 Concepts Covered

### Basic Types
- **Primitive Types**: `number`, `string`, `boolean`
- **Arrays**: Typed arrays and tuples
- **Special Types**: `any`, `unknown`, `void`, `null`
- **Union Types**: Multiple type possibilities

### Advanced Types
- **Type Aliases**: Custom type definitions
- **Interfaces**: Object shape definitions
- **Interface Extension**: Extending interfaces
- **Type Inference**: Automatic type detection
- **Type Annotations**: Explicit type declarations

### Enums
```typescript
enum userRoles {
    ADMIN = 'admin',
    GUEST = 'guest',
    SUPER_ADMIN = 'super'
}
```

### Classes & OOP
- **Constructors**: Object initialization
- **Access Modifiers**: `public`, `private`, `readonly`
- **Methods**: Class functions
- **Inheritance**: Extending classes with `extends`
- **Getters & Setters**: Property accessors
- **Static Members**: Class-level properties

### Functions
- **Return Types**: Typed function returns
- **Rest Parameters**: Variable arguments (`...arr`)
- **Spread Operator**: Array/object spreading

### Generics
- **Generic Functions**: Type-safe reusable functions
```typescript
function fun<L>(a: L, b: string) {}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

### Building the Project

Compile TypeScript to JavaScript:
```bash
npm run build
```

This generates JavaScript files in the `dist/` directory for both browser and Node.js environments.

### Running the Project

**For Browser:**
Open `index.html` in a web browser. The compiled JavaScript will be loaded from `./dist/browser/app.js`.

**For Node.js:**
```bash
node dist/node/app.js
```

## 💡 Key Examples

### Interface Usage
```typescript
interface User {
    name: string
    email: string
    id: number
    gender?: string  // Optional property
}

function getdata(obj: User) {
    obj.email = 'john.doe@company.com'
    console.log(obj.email)
}
```

### Class with Inheritance
```typescript
class HumanMaker {
    age = 0
    constructor(public name: string, public isSmart: boolean, public profession: string) {
        if (!profession) {
            this.profession = 'unemployed'
        }
    }
}

class IndianMaker extends HumanMaker {
    constructor(public state: string) {
        super("Ranjit", true, '')
    }
}
```

### Type Safety with Union Types
```typescript
let y: unknown
y = 123
y = 'main hu don'
if (typeof y === "string") y.toUpperCase()
```

## 📚 Learning Path

1. Start with basic types and type annotations
2. Learn about interfaces and type aliases
3. Explore classes and object-oriented programming
4. Understand generics for reusable code
5. Practice with enums and advanced type features

## 🛠️ Technologies Used

- **TypeScript**: Primary language
- **Node.js**: Runtime environment
- **TSC**: TypeScript compiler

## 📝 Notes

- The project uses multiple TypeScript configurations for different compilation targets (browser and Node.js)
- Source maps are generated for easier debugging
- The code includes Hindi comments for bilingual learners

## 🤝 Contributing

Feel free to fork this project and add more TypeScript examples or improve existing ones. Pull requests are welcome!

## 📄 License

This project is open source and available for educational purposes.

---

**Happy Learning! 🎓**
