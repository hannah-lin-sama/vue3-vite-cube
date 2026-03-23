<template>
  <div class="logs-dashboard">
    <!-- 页面标题 -->
    <div class="logs-header">
      <h3>系统日志分析</h3>
      <p>展示系统运行的周期性指标信息</p>
    </div>

    <!-- 时间范围选择 -->
    <div class="time-range-selector">
      <button
        v-for="range in timeRanges"
        :key="range.value"
        :class="['time-btn', { active: selectedTimeRange === range.value }]"
        @click="selectedTimeRange = range.value"
      >
        {{ range.label }}
      </button>
    </div>

    <!-- 关键指标卡片 -->
    <div class="metrics-cards">
      <div class="metric-card" v-for="metric in metrics" :key="metric.id">
        <div class="metric-icon" :class="metric.iconClass">
          {{ metric.icon }}
        </div>
        <div class="metric-info">
          <h4 class="metric-title">{{ metric.title }}</h4>
          <p class="metric-value">{{ metric.value }}</p>
          <p class="metric-change" :class="metric.changeClass">
            {{ metric.change }}
          </p>
        </div>
      </div>
    </div>

    <!-- 趋势图表 -->
    <div class="trend-charts">
      <div class="chart-container">
        <h4 class="chart-title">系统响应时间趋势</h4>
        <div class="chart-placeholder">
          <div class="chart-grid">
            <div
              v-for="(point, index) in responseTimeData"
              :key="index"
              class="chart-bar"
              :style="{ height: point.height + '%', backgroundColor: point.color }"
            ></div>
          </div>
          <div class="chart-labels">
            <span v-for="(label, index) in timeLabels" :key="index">
              {{ label }}
            </span>
          </div>
        </div>
      </div>

      <div class="chart-container">
        <h4 class="chart-title">请求量趋势</h4>
        <div class="chart-placeholder">
          <div class="chart-grid">
            <div
              v-for="(point, index) in requestCountData"
              :key="index"
              class="chart-bar"
              :style="{ height: point.height + '%', backgroundColor: point.color }"
            ></div>
          </div>
          <div class="chart-labels">
            <span v-for="(label, index) in timeLabels" :key="index">
              {{ label }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 详细日志表格 -->
    <div class="logs-table-container">
      <h4 class="table-title">最近日志记录</h4>
      <div class="table-wrapper">
        <table class="logs-table">
          <thead>
            <tr>
              <th>时间</th>
              <th>级别</th>
              <th>模块</th>
              <th>消息</th>
              <th>响应时间</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="log in recentLogs" :key="log.id" :class="log.levelClass">
              <td>{{ log.time }}</td>
              <td>
                <span class="level-badge" :class="log.levelClass">
                  {{ log.level }}
                </span>
              </td>
              <td>{{ log.module }}</td>
              <td>{{ log.message }}</td>
              <td>{{ log.responseTime }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

defineOptions({
  name: "HomeDashboardIndexLogsView",
});

// 时间范围选项
const timeRanges = [
  { label: "过去24小时", value: "24h" },
  { label: "过去7天", value: "7d" },
  { label: "过去30天", value: "30d" },
  { label: "过去90天", value: "90d" },
];

// 选中的时间范围
const selectedTimeRange = ref("24h");

// 关键指标数据
const metrics = ref([
  {
    id: 1,
    title: "总请求数",
    value: "12,458",
    change: "+12.5%",
    changeClass: "positive",
    icon: "📈",
    iconClass: "primary",
  },
  {
    id: 2,
    title: "平均响应时间",
    value: "123ms",
    change: "-8.2%",
    changeClass: "positive",
    icon: "⚡",
    iconClass: "success",
  },
  {
    id: 3,
    title: "错误率",
    value: "2.3%",
    change: "+1.1%",
    changeClass: "negative",
    icon: "⚠️",
    iconClass: "warning",
  },
  {
    id: 4,
    title: "系统负载",
    value: "45%",
    change: "-3.4%",
    changeClass: "positive",
    icon: "🏋️",
    iconClass: "info",
  },
]);

// 时间标签
const timeLabels = ref(["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"]);

// 响应时间数据
const responseTimeData = ref([
  { height: 45, color: "#1890ff" },
  { height: 38, color: "#1890ff" },
  { height: 65, color: "#ff4d4f" },
  { height: 52, color: "#1890ff" },
  { height: 48, color: "#1890ff" },
  { height: 35, color: "#1890ff" },
]);

// 请求量数据
const requestCountData = ref([
  { height: 30, color: "#52c41a" },
  { height: 25, color: "#52c41a" },
  { height: 60, color: "#52c41a" },
  { height: 75, color: "#52c41a" },
  { height: 65, color: "#52c41a" },
  { height: 45, color: "#52c41a" },
]);

// 最近日志记录
const recentLogs = ref([
  {
    id: 1,
    time: "2026-03-23 14:30:22",
    level: "INFO",
    levelClass: "info",
    module: "API",
    message: "用户登录成功",
    responseTime: "45ms",
  },
  {
    id: 2,
    time: "2026-03-23 14:28:15",
    level: "ERROR",
    levelClass: "error",
    module: "Database",
    message: "数据库连接超时",
    responseTime: "2500ms",
  },
  {
    id: 3,
    time: "2026-03-23 14:25:47",
    level: "INFO",
    levelClass: "info",
    module: "API",
    message: "数据查询成功",
    responseTime: "67ms",
  },
  {
    id: 4,
    time: "2026-03-23 14:22:18",
    level: "WARN",
    levelClass: "warning",
    module: "Cache",
    message: "缓存容量不足",
    responseTime: "12ms",
  },
  {
    id: 5,
    time: "2026-03-23 14:18:55",
    level: "INFO",
    levelClass: "info",
    module: "API",
    message: "文件上传成功",
    responseTime: "124ms",
  },
]);

// 页面加载时的操作
onMounted(() => {
  // 这里可以添加数据加载逻辑
  console.log("Logs dashboard loaded");
});
</script>

<style lang="less" scoped>
// 主容器
.logs-dashboard {
  padding: 20px;
  background-color: @bg-color;
  border-radius: @border-radius;
  animation: fadeIn 0.3s ease-out;
}

// 页面标题
.logs-header {
  margin-bottom: 24px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: @text-primary;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: @text-secondary;
  }
}

// 时间范围选择器
.time-range-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;

  .time-btn {
    padding: 8px 16px;
    border: 1px solid @border-color;
    background-color: @bg-white;
    border-radius: @border-radius;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: @primary-color;
      color: @primary-color;
    }

    &.active {
      background-color: @primary-color;
      color: @text-white;
      border-color: @primary-color;
    }
  }
}

// 指标卡片容器
.metrics-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

// 指标卡片
.metric-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background-color: @bg-white;
  border-radius: @border-radius;
  box-shadow: @shadow;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: @shadow-lg;
  }

  .metric-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;

    &.primary {
      background-color: rgba(24, 144, 255, 0.1);
      color: @primary-color;
    }

    &.success {
      background-color: rgba(82, 196, 26, 0.1);
      color: @success-color;
    }

    &.warning {
      background-color: rgba(255, 193, 7, 0.1);
      color: @warning-color;
    }

    &.info {
      background-color: rgba(102, 126, 234, 0.1);
      color: #667eea;
    }
  }

  .metric-info {
    flex: 1;

    .metric-title {
      font-size: 14px;
      color: @text-secondary;
      margin-bottom: 4px;
    }

    .metric-value {
      font-size: 20px;
      font-weight: 600;
      color: @text-primary;
      margin-bottom: 4px;
    }

    .metric-change {
      font-size: 12px;
      font-weight: 500;

      &.positive {
        color: @success-color;
      }

      &.negative {
        color: @error-color;
      }
    }
  }
}

// 趋势图表容器
.trend-charts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

// 图表容器
.chart-container {
  background-color: @bg-white;
  border-radius: @border-radius;
  box-shadow: @shadow;
  padding: 20px;

  .chart-title {
    font-size: 16px;
    font-weight: 600;
    color: @text-primary;
    margin-bottom: 20px;
  }

  .chart-placeholder {
    height: 200px;
    position: relative;

    .chart-grid {
      display: flex;
      align-items: flex-end;
      gap: 10px;
      height: 160px;
      margin-bottom: 20px;

      .chart-bar {
        flex: 1;
        border-radius: 4px 4px 0 0;
        transition: all 0.3s ease;

        &:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }
      }
    }

    .chart-labels {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: @text-secondary;
    }
  }
}

// 日志表格容器
.logs-table-container {
  background-color: @bg-white;
  border-radius: @border-radius;
  box-shadow: @shadow;
  padding: 20px;

  .table-title {
    font-size: 16px;
    font-weight: 600;
    color: @text-primary;
    margin-bottom: 20px;
  }

  .table-wrapper {
    overflow-x: auto;

    .logs-table {
      width: 100%;
      border-collapse: collapse;

      th,
      td {
        padding: 12px 16px;
        text-align: left;
        border-bottom: 1px solid @border-color;
        font-size: 14px;
      }

      th {
        background-color: #fafafa;
        font-weight: 600;
        color: @text-primary;
      }

      tr {
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #f9f9f9;
        }

        &.info {
          background-color: rgba(24, 144, 255, 0.05);
        }

        &.error {
          background-color: rgba(255, 77, 79, 0.05);
        }

        &.warning {
          background-color: rgba(255, 193, 7, 0.05);
        }
      }

      .level-badge {
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;

        &.info {
          background-color: rgba(24, 144, 255, 0.1);
          color: @primary-color;
        }

        &.error {
          background-color: rgba(255, 77, 79, 0.1);
          color: @error-color;
        }

        &.warning {
          background-color: rgba(255, 193, 7, 0.1);
          color: @warning-color;
        }
      }
    }
  }
}

// 动画
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 响应式设计
@media (max-width: 768px) {
  .logs-dashboard {
    padding: 15px;
  }

  .metrics-cards {
    grid-template-columns: 1fr;
  }

  .trend-charts {
    grid-template-columns: 1fr;
  }

  .chart-container {
    .chart-placeholder {
      height: 180px;

      .chart-grid {
        height: 140px;
      }
    }
  }

  .logs-table-container {
    .logs-table {
      th,
      td {
        padding: 10px;
        font-size: 12px;
      }
    }
  }
}
</style>
