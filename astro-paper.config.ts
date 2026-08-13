import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://wye-blog.pages.dev/",  // 占位，部署后回来改成真实域名
    title: "WYE 的博客",                 // 改成你想要的站名
    description: "数据工程、系统学习与思考和经验分享。",  // 改成你想要的简介
    author: "吴英锷",                     // 改成你的真名或笔名
    profile: "https://github.com/wyexsq", // 你的个人主页,先用 GitHub 主页顶着
    ogImage: "default-og.jpg",
    lang: "zh-cn",                        // 中文站点
    timezone: "Asia/Shanghai",            // 上海时区
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,  // 先关掉,你不需要"在 GitHub 上编辑"这个链接
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/wyexsq" },
    { name: "mail", url: "mailto:2753380383@qq.com" },  // 换成你的邮箱
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
