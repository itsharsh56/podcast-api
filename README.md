# Podcast API

A modern RESTful API built with [NestJS](https://nestjs.com/) for managing podcast episodes and topics. This API provides endpoints to fetch, create, and manage podcast episodes with features like sorting, filtering, and featured episode retrieval.

## 🚀 Features

- **Episode Management** - Create, retrieve, and manage podcast episodes
- **Featured Episodes** - Special endpoint for retrieving featured episodes
- **Sorting** - Sort episodes in ascending or descending order
- **Configuration Management** - Centralized configuration service
- **TypeScript** - Fully typed codebase for better development experience
- **Testing** - Unit tests and E2E test support with Jest and Supertest
- **Code Quality** - ESLint and Prettier for consistent code formatting

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd podcast-api
```

2. Install dependencies:
```bash
npm install
```

## 📖 Usage

### Development

Start the application in development mode with hot-reload:
```bash
npm run start:dev
```

### Production

Build and run the application in production:
```bash
npm run build
npm run start:prod
```

### Debug Mode

Start the application with debugging enabled:
```bash
npm run start:debug
```

## 🧪 Testing

### Run unit tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm test:watch
```

### Run tests with coverage
```bash
npm test:cov
```

### Run E2E tests
```bash
npm run test:e2e
```

## 📝 Code Quality

### Format Code
Format all TypeScript files with Prettier:
```bash
npm run format
```

### Lint Code
Run ESLint to check code quality:
```bash
npm run lint
```

## 📂 Project Structure

```
podcast-api/
├── src/
│   ├── config/              # Configuration module
│   │   ├── config.module.ts
│   │   └── config.service.ts
│   ├── episodes/            # Episodes module
│   │   ├── dto/             # Data transfer objects
│   │   ├── entity/          # Episode entity models
│   │   ├── episodes.controller.ts
│   │   ├── episodes.service.ts
│   │   └── episodes.module.ts
│   ├── topics/              # Topics module
│   │   └── topics.module.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts              # Application entry point
├── test/
│   ├── app.e2e-spec.ts      # E2E tests
│   └── jest-e2e.json        # E2E test configuration
├── package.json
├── tsconfig.json
└── README.md
```

## 🔌 API Endpoints

### Episodes

- **GET /episodes** - Get all episodes
  - Query Parameters:
    - `sort` (optional): Sort order - `asc` or `desc` (default: `desc`)

- **GET /episodes/featured** - Get featured episodes

- **POST /episodes** - Create a new episode
  - Request body: Episode data

## 🛠️ Technology Stack

- **Framework**: [NestJS](https://nestjs.com/) 11.0.1
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Testing**: [Jest](https://jestjs.io/) + [Supertest](https://github.com/visionmedia/supertest)
- **Code Quality**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- **Build Tool**: [Nest CLI](https://docs.nestjs.com/cli/overview)

## 📄 Configuration

The application uses environment variables for configuration. The default port is `3000`, but you can override it using the `PORT` environment variable:

```bash
PORT=8080 npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the UNLICENSED license.



## 🔗 Links

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Jest Testing Framework](https://jestjs.io/)

## 💡 Support

For issues and questions, please open an issue on the GitHub repository.

---

**Happy coding! 🎙️**
