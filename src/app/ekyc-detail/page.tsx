import DetailBanner from "@/components/common/DetailBanner";
import SubBanner from "@/components/common/SubBanner";
import Image from "next/image";
import React from "react";

function EkycDetail() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mt-12">
        <div className="container max-w-6xl">
          <DetailBanner
            title="eKYC"
            subTitle="Định danh khách hàng"
            image="/img/ekyc-detail-banner.png"
            description="eKYC là định danh khách hàng điện tử được ứng dụng nhiều trong chấm điểm tín dụng giúp đem lại sự thuận tiện và tin cậy."
          />
        </div>
      </section>

      <section className="pt-24 md:py-24">
        <div className="container flex max-w-6xl flex-col justify-around md:flex-row">
          <div className="relative h-[289px] w-[300px] self-center">
            <Image
              src="/img/ekyc-detail/customer.png"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="mx-5 mt-4 max-w-[700px] space-y-5 md:mt-0">
            <h3 className="text-center text-xl font-bold text-primary md:text-start md:text-4xl">
              KYC là gì?
            </h3>
            <p className="text-neutral-500">
              KYC (Know Your Customer) có nghĩa là Biết khách hàng của bạn, là
              quy trình để xác định và xác minh danh tính của khách hàng khi mở
              tài khoản và định kỳ theo thời gian.
            </p>

            <h3 className="text-center text-xl font-bold text-primary md:text-start md:text-4xl">
              eKyc là gì?
            </h3>
            <p className="text-neutral-500">
              eKYC là định danh khách hàng điện tử; là phát triển của công nghệ
              và để đơn giản hóa các thủ tục, giấy tờ, tạo thuận lợi cho khách
              hàng, hiện nay các ngân hàng ở nhiều quốc gia với sự chấp thuận
              của cơ quan quản lý có thẩm quyền, đã và đang chuyển sang hình
              thức nhận biết khách hàng qua phương thức điện tử.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container flex max-w-6xl flex-col-reverse justify-around md:flex-row">
          <div className="mx-5 mt-4 max-w-[700px] space-y-5 md:mt-0">
            <h3 className="text-center text-xl font-bold text-primary md:text-start md:text-4xl">
              eKYC trong chấm điểm tín dụng
            </h3>
            <p className="text-neutral-500">
              Các thủ tục KYC được xác định bởi các ngân hàng, liên quan đến tất
              cả các hành động cần thiết để đảm bảo khách hàng của họ là có
              thật, đánh giá và giám sát rủi ro. Các quy trình này giúp ngăn
              ngừa gian lận và các chương trình tham nhũng bất hợp pháp khác.
            </p>
            <p className="text-neutral-500">
              Quy trình KYC bao gồm xác minh thẻ ID, xác minh khuôn mặt, xác
              minh tài liệu như hóa đơn tiện ích làm bằng chứng địa chỉ hay thu
              nhập cá nhân và xác minh sinh trắc học. Các ngân hàng phải tuân
              thủ các quy định KYC và các quy định chống rửa tiền để hạn chế
              gian lận. Trách nhiệm tuân thủ KYC thuộc về các ngân hàng. Trong
              trường hợp không tuân thủ, hình phạt nặng có thể được áp dụng.
            </p>
            <p className="text-neutral-500">
              Và eKYC Việt Nam đang trên đường tìm kiếm qui trình để xây dựng
              pháp lý hoàn chỉnh và có thể ứng dụng nó càng nhanh càng tốt vào
              các hệ thống ngân hàng hiện tại.
            </p>
          </div>

          <div className="relative h-[289px] w-[300px] self-center">
            <Image
              src="/img/ekyc-detail/process.png"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-6xl">
          <h3 className="text-center text-xl font-bold text-primary md:text-4xl">
            Lợi ích chúng tôi đem lại
          </h3>
          <div className="mt-8 flex flex-col justify-around lg:flex-row">
            <div className="relative h-[215px] w-[394px] self-center md:h-[350px] md:w-[550px] lg:h-[500px]">
              <Image
                src="/img/ekyc-detail/benefit.png"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-5 lg:max-w-[500px]">
              <h6 className="font-bold text-neutral-500">
                Giải pháp định danh khách hàng thuận tiện và tin cậy
              </h6>
              <ul className="ml-10 list-disc">
                <li className="text-neutral-500">
                  Công nghệ nhận dạng khuôn mặt, nhận diện sự sống và so khớp
                  khuôn mặt dựa trên AI giúp xác minh danh tính khách hàng một
                  cách chính xác.
                </li>
                <li className="text-neutral-500">
                  Thay vì định danh khách hàng bằng gặp mặt trực tiếp, qua đối
                  chiếu chứng từ giấy khá phiền phức, eKYC thực hiện định danh
                  khách hàng bằng phương thức điện tử không cần gặp mặt trực
                  tiếp nhờ sự hỗ trợ của các công nghệ tiên tiến như kiểm tra,
                  đối chiếu thông tin cá nhân tức thì với cơ sở dữ liệu tập
                  trung về danh tính người dùng, nhận diện khách hàng nhờ trí
                  tuệ nhân tạo (AI),…
                </li>
                <li className="text-neutral-500">
                  Cung cấp giải pháp tùy chỉnh phù hợp với nhiều cấp độ tiêu
                  chuẩn và rủi ro, tạo ra các cấu hình phù hợp cho nền tảng xác
                  minh danh tính.
                </li>
                <li className="text-neutral-500">
                  Chống gian lận tín dụng, chứng thực thông tin của khách hàng
                  trong cơ sở dữ liệu tín dụng và đưa ra các cảnh báo rủi ro, tỉ
                  lệ nợ xấu cho các tổ chức tài chính.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-col justify-around md:flex-row-reverse">
            <div className="relative h-[182px] w-[300px] self-center">
              <Image
                src="/img/ekyc-detail/cost.png"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mt-8 max-w-[500px] space-y-5 md:mt-0">
              <h6 className="font-bold text-neutral-500">
                Giảm chi phí hoạt động và đơn giản hóa thủ tục
              </h6>
              <p>
                eKYC giúp giảm thiểu nguồn nhân lực, thuận tiện hơn rất nhiều
                trong việc đơn giản hóa thủ tục, giấy tờ, nâng cao trải nghiệm
                khách hàng.
              </p>
              <ul className="ml-10 list-disc">
                <li className="text-neutral-500">
                  Nâng cao độ bảo mật, tính minh bạch của thông tin.
                </li>
                <li className="text-neutral-500">
                  Giúp chuyên viên tư vấn nhận diện được người dùng, đồng thời
                  giúp tiết kiệm chi phí cho doanh nghiệp.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EkycDetail;
