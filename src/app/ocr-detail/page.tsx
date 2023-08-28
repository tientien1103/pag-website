import DetailBanner from "@/components/common/DetailBanner";
import Image from "next/image";
import React from "react";

function OcrDetail() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mt-12">
        <div className="container max-w-6xl">
          <DetailBanner
            title="OCR"
            subTitle="Số hóa dữ liệu"
            image="/img/orc-detail-banner.png"
            description="OCR (Số hóa dữ liệu) là sản phẩm đem lại nhiều tiện ích trong lĩnh vực tài chính khi kết hợp với eKYC để đem lại kết quả tốt hơn."
          />
        </div>
      </section>

      <section className="pt-24">
        <div className="container flex max-w-6xl flex-col-reverse justify-around lg:flex-row-reverse">
          <div className="mt-4 w-full space-y-5 px-5 md:mt-0 md:px-8 lg:max-w-[500px] lg:px-0">
            <h3 className="text-center text-xl font-bold text-primary md:text-start md:text-4xl">
              OCR là gì?
            </h3>
            <p className="text-neutral-500">
              Nhận dạng kí tự quang học (OCR – Optical Charater Recognition) là
              phần mềm máy tính xử lí và cho phép chuyển đổi tài liệu dạng ảnh
              thành tài liệu có thể biên tập được.
            </p>
            <p className="text-neutral-500">
              OCR thực hiện được điều này nhờ kết hợp giữa Computer Vision (thị
              giác máy tính) và công nghệ xử lí ngôn ngữ tự nhiên (NLP), giúp
              nhận dạng các chữ cái và kí tự, sau đó sao chép chúng theo định
              dạng và thứ tự được viết.
            </p>
            <p className="text-neutral-500">
              Đối với việc trích xuất các trường thông tin cần thiết trong giấy
              tờ tuy thân như chứng minh nhân dân, giấy phép lái xe… khi đưa tài
              liệu lên hệ thống, người dùng chọn lựa và xác định các vùng cần
              bóc tách.
            </p>
            <p className="text-neutral-500">
              Sau đó, hệ thống được OCR nhận dạng để chuyển sang dạng text và tự
              động trích xuất các trường thông tin cần thiết.
            </p>
          </div>

          <div className="relative h-[263px] w-full self-center md:w-[532px]">
            <Image
              src="/img/ocr-detail/software.png"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      <section className="pt-24">
        <div className="container mx-auto max-w-5xl space-y-20">
          <div className="mx-5 mt-4 space-y-5 md:mt-0">
            <h3 className="text-center text-xl font-bold text-primary md:text-4xl">
              Ứng dụng của OCR trong lĩnh vực tài chính
            </h3>
            <p className="text-neutral-500">
              Công nghệ OCR đã mang lại vô số tiện ích cho ngành ngân hàng,
              nhưng đáng chú ý nhất là số hoá tài liệu.
            </p>
            <p className="text-neutral-500">
              Những năm gần đây, với sự phát triển mạnh mẽ của Trí tuệ nhân tạo
              (AI), OCR được mở rộng thành công nghệ thu thập và quản lí dữ
              liệu, đóng vai trò vô cùng quan trọng trong hệ thống tự động hoá
              quy trình kinh doanh của ngân hàng. Nhờ tích hợp AI, OCR hiểu được
              những gì nó trích xuất và tự động cải thiện đầu ra bằng Học Máy,
              học hỏi từ các dữ liệu sẵn có và liên tục bổ sung kiến thức còn
              thiếu, giúp xử lí và kiểm tra các lỗi tài liệu vật lí một cách
              nhanh chóng, tiết kiệm thời gian và chi phí.
            </p>
            <p className="text-neutral-500">
              Đối với văn bản đánh máy, OCR cho độ chính xác trên 98%. Các ngân
              hàng sử dụng OCR như một phương tiện bảo mật giao dịch và quản lí
              rủi ro. AI có thể học hiểu để phân tích và xử lí nội dung tài liệu
              kĩ lưỡng, phát hiện điều bất thường từ thông tin thanh toán tín
              dụng trong dữ liệu trích xuất của khách hàng.
            </p>
          </div>

          <div className="mx-5 mt-4 space-y-5 md:mt-0">
            <h3 className="text-center text-xl font-bold text-primary md:text-4xl">
              OCR khi kết hợp với eKYC
            </h3>
            <p className="text-neutral-500">
              Sản phẩm của Kalapa kết hợp giữa OCR và định danh khách hàng eKYC
              nhằm đem đến giải pháp tối ưu cho doanh nghiệp, cung cấp các thông
              tin chính xác nhanh chóng vượt bậc so với sử dụng phương pháp thủ
              công và tin cậy trong xác minh danh tính khách hàng.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-6xl">
          <h3 className="text-center text-xl font-bold text-primary md:text-3xl">
            Lợi ích công nghệ OCR đem lại khi sử dụng sản phẩm của chúng tôi
          </h3>
          <div className="mt-8 flex flex-col justify-around md:flex-row-reverse">
            <div className="relative h-[182px] w-[300px] self-center">
              <Image
                src="/img/ocr-detail/test.png"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mt-5 w-full space-y-5 md:mt-0 md:max-w-[500px] lg:max-w-[700px]">
              <h6 className="font-bold text-neutral-500">
                Kiểm tra tính đúng đắn của thông tin
              </h6>
              <ul className="ml-8 list-disc">
                <li className="text-neutral-500">
                  Công nghệ OCR dựa trên AI đọc và trích xuất các thông tin trên
                  giấy tờ tuỳ thân, giúp tự động hoá quy trình điền thông tin
                  của người dùng.
                </li>
                <li className="text-neutral-500">
                  Độ chính xác của công nghệ OCR tại Kalapa cung cấp lên tới 98%
                  – thuộc nhóm dẫn đầu thị trường.
                </li>
                <li className="text-neutral-500">
                  Giúp số hóa các loại giấy tờ tùy thân của khách hàng, nhận
                  dạng và trích xuất chính xác nội dung văn bản từ hình ảnh,
                  kiểm tra tính đúng đắn của thông tin.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-col justify-around md:flex-row">
            <div className="relative h-[215px] w-[394px] md:h-[350px] md:w-[550px] lg:h-[300px]">
              <Image
                src="/img/ocr-detail/benefit.png"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mt-5 max-w-[420px] space-y-5 md:mt-0 lg:mt-14">
              <h6 className="font-bold text-neutral-500">
                Đem lại sự thuận tiện và hài lòng cho khách hàng
              </h6>
              <ul className="ml-8 list-disc">
                <li className="text-neutral-500">
                  Rút ngắn thời gian nhập liệu, xử lý thông tin nhanh chóng.
                </li>
                <li className="text-neutral-500">
                  Giải quyết các bài toán số hóa hàng triệu tài liệu nhanh chóng
                  và tự động hóa.
                </li>
                <li className="text-neutral-500">
                  Tối ưu trong vận hành, giảm thiểu sai sót và mang lại sự hài
                  lòng cho khách hàng.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OcrDetail;
