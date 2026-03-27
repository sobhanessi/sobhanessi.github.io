/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig = {};

const withNextIntl = createNextIntlPlugin("./request.ts");
export default withNextIntl(nextConfig);

// export default nextConfig;
