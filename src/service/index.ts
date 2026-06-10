import axios from "axios";

const service = axios.create({
  // baseURL: '/api',
  timeout: 10000,
  // withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

console.log("service", service);

service.interceptors.request.use(
  // success
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  // error
  (error) => {
    return Promise.reject(error);
  },
  // options
  {
    synchronous: false, // 默认为false
    runWhen: null,
  },
);

const refreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const res = await axios.post("/auth/refresh", { refreshToken });
  const newAccessToken = res.data.accessToken;
  localStorage.setItem("accessToken", newAccessToken);
  return newAccessToken;
};

service.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("accessToken");

      try {
        const newAccessToken = await refreshToken();

        if (newAccessToken) {
          // 刷新token成功，重新发送请求
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return service(error.config);
        }
      } catch (error) {
        console.error("刷新token失败:", error);
        // 这里可以添加错误处理逻辑
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");

        // 跳转到登录页
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default service;
