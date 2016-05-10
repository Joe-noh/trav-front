let env;

if (/prod/.test(ENV)) {
  env = {
    production: true,
    backendUrl: 'http://example.com'
  };
} else {
  env = {
    production: false,
    backendUrl: 'http://localhost:4000'
  };
}

export default env;
