##

## 身份认证
### 1.API 密钥
```
what？
API 密钥 是一种简单的身份验证机制，通常是一个唯一的字符，用于识别和验证调用API的用户或者是应用程序，API密钥通常是在请求中作为查询参数或者是请求头使用。

How?
先获取API的密钥，一般需要注册之后获得。
作为查询参数？

import requests
api_key = 'YOUR_API_KEY'
url = f'https://api.example.com/data?api_key={api_key}'


作为请求头?
api_key = 'YOUR_API_KEY'
url = 'https://api.example.com/data'

headers = {
    'Authorization': f'Bearer {api_key}'  # 使用 Bearer 令牌格式
}

```

### 2.OAuth2.0
OAuth 2.0 是一种开放性的标准，用于授权第三方应用程序访问永固的资源，而无需共享用户的用户名和密码。OAuth2.0 允许用户授权应用程序访问其数据，同时保持对其数据的控制。
```

```




