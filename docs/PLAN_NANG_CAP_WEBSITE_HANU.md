# Plan nâng cấp toàn diện website HANU Nails

## Mục tiêu sản phẩm

Website HANU Nails cần là nơi khách xem được tác phẩm nail đẹp, chọn mẫu nhanh và đặt lịch dễ. Trọng tâm trước mắt không phải làm hệ thống quá lớn, mà là hoàn thiện 3 luồng chính:

1. Xem bộ sưu tập mẫu nail.
2. Xem tác phẩm nail chụp thật do tiệm tự đăng.
3. Đặt lịch làm nail nhanh, rõ thông tin để tiệm tư vấn lại.

## Định hướng thiết kế

Phong cách chính lấy từ moodboard `public/Hanu.png`:

- Sang, tối giản, nhiều khoảng thở.
- Tông trắng, xám, beige, nâu nhạt, nâu đậm.
- Hình ảnh nail là trung tâm, không để chữ và hiệu ứng lấn át tác phẩm.
- Header gọn, dễ điều hướng.
- Trang chủ phải cho khách hiểu ngay: đây là studio nail, có mẫu đẹp, có tác phẩm thật, có đặt lịch.

## Nâng cấp font chữ

Website dùng bộ font mới:

- Font chính toàn website: `Quicksand`.

Lý do:

- `Quicksand` mềm hơn các font đã thử trước đó, nét bo tròn hợp ngành nails/beauty hơn.
- Dùng một font thống nhất giúp chữ Việt rõ hơn, tránh heading serif quá mảnh hoặc body quá cứng.
- Các chữ nhỏ, nút bấm và label được tăng size, tăng weight và giảm letter-spacing để dễ đọc hơn.
- Font được nạp bằng `next/font/google`, Next.js sẽ tự tối ưu và self-host khi build.

## Trạng thái triển khai hiện tại

Đã triển khai:

- Design system đọc rõ hơn: font `Quicksand`, body lớn hơn, label/nút/tag dễ đọc hơn.
- Utility class dùng chung: `hanu-eyebrow`, `hanu-heading`, `hanu-copy`, `hanu-button`, `hanu-text-link`.
- Homepage được sắp lại theo luồng khách: hero, lý do tin, mẫu nail mới, bộ sưu tập, viewer góc tay, quy trình, CTA đặt lịch.
- Trang mẫu nail có tab nguồn dữ liệu: mẫu tham khảo và tác phẩm thật.
- Card mẫu nail hiển thị rõ giá từ, thời gian, số góc ảnh và CTA.
- Modal mẫu nail có thông tin chi tiết, tag, CTA đặt lịch và hỏi Zalo.
- Form booking tăng cỡ chữ, input rõ hơn, vẫn tự điền mẫu từ URL.
- Trang chủ theo moodboard HANU.
- Banner tay/nail 360 độ dạng tương tác.
- Khu mẫu nail mới.
- Khu bộ sưu tập.
- Modal xem chi tiết mẫu nail.
- Form đặt lịch tiếng Việt.
- Link đặt lịch từ từng mẫu nail sang form booking.
- Floating CTA trên mobile.
- Metadata SEO cơ bản và schema `NailSalon`.
- Font mới `Quicksand` cho toàn site.

Đang ưu tiên làm tiếp:

- Làm rõ hệ thống ảnh: mẫu tham khảo và tác phẩm chụp thật phải tách riêng.
- Cải thiện toàn bộ trang phụ để không lệch phong cách so với trang chủ.
- Chuẩn hóa dữ liệu nail để sau này dễ đưa vào admin/database.
- Tối ưu mobile vì khách nail sẽ xem bằng điện thoại là chính.

## Giai đoạn 1 - Hoàn thiện nền tảng hiện tại

Mục tiêu: website chạy ổn, giao diện sạch, khách dùng được ngay.

- Hoàn thiện trang chủ gồm hero, banner tay 360, mẫu nail mới, bộ sưu tập, quy trình đặt lịch và CTA.
- Chuẩn hóa tiếng Việt trên header, footer, nút bấm, form.
- Tối ưu font, khoảng cách, kích thước chữ để đọc rõ trên mobile.
- Kiểm tra build production trước khi deploy.
- Giữ dữ liệu mẫu trong code để dễ chỉnh trong giai đoạn đầu.

## Giai đoạn 2 - Bộ sưu tập mẫu nail

Mục tiêu: khách xem mẫu nhanh và chọn được mẫu muốn làm.

- Tạo trang danh sách mẫu nail có lọc theo phong cách.
- Mỗi mẫu có ảnh chính, tên mẫu, mô tả, giá dự kiến, thời gian làm.
- Thêm modal xem chi tiết mẫu.
- Nút đặt lịch từ từng mẫu sẽ đưa tên mẫu sang form booking.
- Sau này có thể mở rộng mỗi mẫu thành nhiều góc ảnh.

## Giai đoạn 3 - Tác phẩm chụp thật

Mục tiêu: tiệm có nơi show sản phẩm thật để tăng độ tin cậy.

- Tạo nhóm “Tác phẩm thật” tách khỏi “Mẫu tham khảo”.
- Mỗi tác phẩm có ảnh thật, ngày đăng, tone màu, kiểu dáng, ghi chú ngắn.
- Ưu tiên ảnh do tiệm chụp, không dùng ảnh quá stock.
- Sau này có thể thêm form admin đơn giản để vợ anh tự upload ảnh.

## Giai đoạn 4 - Đặt lịch

Mục tiêu: khách gửi thông tin đủ để tiệm gọi hoặc nhắn lại xác nhận.

- Form gồm tên, số điện thoại, dịch vụ, ngày, giờ, kênh liên hệ, mẫu muốn làm, ghi chú.
- Khi bấm đặt lịch từ mẫu nail, form tự điền mẫu tham khảo.
- Trạng thái gửi form phải rõ ràng.
- Giai đoạn sau kết nối Google Sheets, email, Zalo hoặc database.

## Giai đoạn 5 - Quản trị nội dung

Mục tiêu: chủ tiệm tự cập nhật nội dung mà không cần sửa code.

- Tạo admin đăng nhập.
- Upload ảnh nail thật.
- Thêm, sửa, ẩn mẫu nail.
- Quản lý lịch hẹn.
- Quản lý trạng thái khách: mới gửi, đã liên hệ, đã xác nhận, hoàn tất.

## Giai đoạn 6 - SEO và deploy

Mục tiêu: website dễ tìm trên Google và chạy ổn khi public.

- Metadata tiếng Việt cho từng trang.
- Sitemap và robots.
- Schema `NailSalon`.
- Tối ưu ảnh bằng `next/image`.
- Kiểm tra hiệu năng mobile.
- Deploy lên Vercel hoặc VPS.
- Gắn domain chính thức.

## Checklist kiểm tra trước khi bàn giao

- `npm run lint` không lỗi.
- `npm run typecheck` không lỗi.
- `npm run build` không lỗi.
- Trang chủ không trắng, ảnh hiển thị đúng.
- Trang mẫu nail lọc được.
- Modal xem mẫu hoạt động.
- Form booking gửi được trạng thái thành công.
- Link đặt lịch từ mẫu nail có tự điền tên mẫu.
- Mobile không bị chữ tràn, nút bấm không đè nội dung.

## Ưu tiên tiếp theo

1. Thay ảnh placeholder bằng ảnh thật của tiệm.
2. Làm nhiều góc ảnh cho từng mẫu nail.
3. Kết nối form booking với Google Sheets hoặc email.
4. Làm trang admin upload ảnh đơn giản.
5. Deploy bản public để khách test trên điện thoại.
