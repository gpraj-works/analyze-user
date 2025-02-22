# @analyze-user/client

A lightweight JavaScript/TypeScript library to analyze user environment, device, and network information from the client-side.

## Installation

### Using npm:
```sh
npm install @analyze-user/client
```

### Using Yarn:
```sh
yarn add @analyze-user/client
```

### Using pnpm:
```sh
pnpm add @analyze-user/client
```

## Usage

### React Example
```tsx
import React, { useEffect, useState } from "react";
import { userAnalyzes, initEventTracking } from "@analyze-user/client";

const UserAnalytics = () => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await userAnalyzes();
      setAnalytics(data);
    })();

    initEventTracking();
  }, []);

  return <pre>{JSON.stringify(analytics, null, 2)}</pre>;
};

export default UserAnalytics;
```

### Vue Example
```vue
<template>
  <div>
    <pre>{{ analytics }}</pre>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { userAnalyzes, initEventTracking } from "@analyze-user/client";

export default {
  setup() {
    const analytics = ref(null);

    onMounted(async () => {
      analytics.value = await userAnalyzes();
      initEventTracking();
    });

    return { analytics };
  },
};
</script>
```

### JavaScript Example (Axios Request)
```js
import { userAnalyzes } from "@analyze-user/client";
import axios from "axios";

(async () => {
  const analytics = await userAnalyzes();
  console.log(analytics);

  await axios.post("https://your-api.com/analytics", analytics);
})();
```

## API Reference

### `userAnalyzes(): Promise<UserAnalysis>`
Fetches detailed user analytics including:
- Browser Info
- Device Info
- Network Info
- User Preferences
- Geolocation
- Page Info
- Performance Metrics

### `initEventTracking(): void`
Starts tracking user events such as clipboard actions and window state changes.

## Example Output
```json
{
  "browser": { "name": "Chrome", "version": "119" },
  "device": { "os": "Windows", "screenResolution": "1920x1080", "touchSupport": false },
  "network": { "networkType": "4g" },
  "ip": "192.168.1.1",
  "user": { "language": "en-US", "cookieEnabled": true, "darkMode": false, "reducedMotion": false },
  "location": "Geolocation denied",
  "page": { "url": "https://example.com", "referrer": "https://google.com" },
  "performance": { "pageLoadTime": 1200 }
}
```

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Issues

For any issues, please report them [here](https://github.com/gpraj-works/analyze-user/issues).

