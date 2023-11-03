import exp from "constants";

interface Blogs {
  title: string;
  subTitle: string;
  image: string;
  url: string;
}

const BLogsList: Blogs[] = [
  {
    title:
      "Nghị định 13 về bảo vệ dữ liệu cá nhân: Các ngân hàng kiến nghị có thời gian chuyển tiếp khi thực hiện",
    subTitle:
      "Nhóm công tác ngân hàng nước ngoài (BWG) và đại diện Hiệp hội Ngân hàng Việt Nam (VNBA) kiến nghị một lộ trình phù hợp để có thể triển khai Nghị định 13/2023/NĐ-CP bảo vệ dữ liệu cá nhân. Đồng thời, Bộ công an và Ngân hàng Nhà nước đưa ra thông tư liên bộ để giải thích hoặc có thể vận dụng cho nghị định này…",
    image: "/img/blog/blog.webp",
    url: "https://vneconomy.vn/nghi-dinh-13-ve-bao-ve-du-lieu-ca-nhan-cac-ngan-hang-kien-nghi-co-thoi-gian-chuyen-tiep-khi-thuc-hien.htm",
  },
  {
    title: "Ông Trương Gia Bình: 'Sẽ có giáo trình AI từ lớp 1'",
    subTitle:
      "Chủ tịch FPT Trương Gia Bình cho biết sẽ hợp tác với các chuyên gia hàng đầu và đưa AI vào giáo trình giảng dạy cho học sinh, sinh viên Việt.",
    image: "/img/blog/blog1.webp",
    url: "https://vnexpress.net/ong-truong-gia-binh-se-co-giao-trinh-ai-tu-lop-1-4668630.html",
  },
  {
    title:
      "Ý tưởng thuyền vớt rác bằng AI của học sinh Hà Nội thắng giải 'Future Blue Innovation 2023'",
    subTitle:
      "Sáng 23-9, 6 dự án của học sinh THPT xuất sắc vượt qua 1.500 hồ sơ cùng nhau tranh tài tại vòng chung kết cuộc thi Future Blue Innovation 2023 do Thành Đoàn Hà Nội, Đoàn thanh niên - Hội Sinh viên Đại học Quốc gia Hà Nội tổ chức.",
    image: "/img/blog/blog2.webp",
    url: "https://tuoitre.vn/y-tuong-thuyen-vot-rac-bang-ai-cua-hoc-sinh-ha-noi-thang-giai-future-blue-innovation-2023-20230923141824089.htm",
  },
  {
    title: "Mỹ và cuộc đua quản lý trí tuệ nhân tạo",
    subTitle:
      "Tổng thống Mỹ Joe Biden vừa ký sắc lệnh hành pháp đầu tiên về trí tuệ nhân tạo (AI), trong lúc chính phủ nhiều nước cũng đang nỗ lực quản lý công nghệ đang phát triển 'quá nhanh, quá nguy hiểm' này.",
    image: "/img/blog/blog3.webp",
    url: "https://tuoitre.vn/my-va-cuoc-dua-quan-ly-tri-tue-nhan-tao-20231101094248546.htm",
  },
  {
    title: "Microsoft hé lộ Windows 12 tích hợp AI",
    subTitle:
      "Giám đốc điều hành Microsoft Satya Nadella và Giám đốc sản phẩm Pavan Davuluri vừa hé lộ thông tin về Windows trong tương lai sẽ sử dụng AI (trí tuệ nhân tạo), tạm gọi là Windows 12, tại sự kiện Qualcomm giới thiệu Snapdragon X Elite, chip PC mới nhất.",
    image: "/img/blog/blog4.webp",
    url: "https://thanhnien.vn/microsoft-he-lo-windows-12-tich-hop-ai-185231027165638664.htm",
  },
];

export default BLogsList;
