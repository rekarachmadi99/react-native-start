// config/environment.ts
interface Environment {
  apiUrl: string;
  debug: boolean;
}

const development: Environment = {
  apiUrl: "https://dev.api.example.com",
  debug: true,
};

const production: Environment = {
  apiUrl: "https://api.example.com",
  debug: false,
};

const currentEnvironment: Environment =
  process.env.NODE_ENV === "production" ? production : development;

export default currentEnvironment;
