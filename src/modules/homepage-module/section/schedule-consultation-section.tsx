"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  company: z.string().min(1),
  question: z.string().min(1),
  agreement: z.boolean().refine((v) => v === true),
});

type FormValues = z.infer<typeof schema>;

export default function ConsultationSchedule() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      question: "",
      agreement: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/consultation/submit/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Terjadi kesalahan");
        return;
      }

      toast.success("Berhasil, kami akan menghubungi anda segera");
    } finally {
      setLoading(false);
    }
  };

  const testimonials = [
    {
      text: "Sebelum bekerja sama dengan Corvidian, banyak proses di MUC yang berjalan kurang efisien. Beberapa pekerjaan memerlukan waktu lebih lama karena sistem yang ada belum terintegrasi dengan baik. Setelah Corvidian hadir, semuanya berubah. Mereka memahami kebutuhan kami secara mendalam, merancang solusi yang tepat, dan memastikan setiap detail berjalan sesuai rencana. Hasilnya, koordinasi tim menjadi lebih lancar, pekerjaan lebih cepat terselesaikan, dan kinerja perusahaan meningkat signifikan. Corvidian bukan hanya penyedia teknologi, tetapi mitra strategis yang membantu kami bergerak maju.",
      author: "~Sugianto",
      position: "Managing Partner MUC Consulting",
    },
    {
      text: "Sebelum bekerja sama dengan Corvidian, banyak proses di MUC yang berjalan kurang efisien. Beberapa pekerjaan memerlukan waktu lebih lama karena sistem yang ada belum terintegrasi dengan baik. Setelah Corvidian hadir, semuanya berubah. Mereka memahami kebutuhan kami secara mendalam, merancang solusi yang tepat, dan memastikan setiap detail berjalan sesuai rencana. Hasilnya, koordinasi tim menjadi lebih lancar, pekerjaan lebih cepat terselesaikan, dan kinerja perusahaan meningkat signifikan. Corvidian bukan hanya penyedia teknologi, tetapi mitra strategis yang membantu kami bergerak maju.",
      author: "~Sugianto",
      position: "Managing Consulting",
    },
    {
      text: "Sebelum bekerja sama dengan Corvidian, banyak proses di MUC yang berjalan kurang efisien. Beberapa pekerjaan memerlukan waktu lebih lama karena sistem yang ada belum terintegrasi dengan baik. Setelah Corvidian hadir, semuanya berubah. Mereka memahami kebutuhan kami secara mendalam, merancang solusi yang tepat, dan memastikan setiap detail berjalan sesuai rencana. Hasilnya, koordinasi tim menjadi lebih lancar, pekerjaan lebih cepat terselesaikan, dan kinerja perusahaan meningkat signifikan. Corvidian bukan hanya penyedia teknologi, tetapi mitra strategis yang membantu kami bergerak maju.",
      author: "~Sugianto",
      position: "Managing Partner MUC Consulting",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const inputStyle =
    "w-full bg-transparent border-0 border-b border-black pb-[8px] font-normal text-[18px] text-[#1D1F26] placeholder-[#1D1F26] focus:border-[#02C2B3] focus-visible:ring-0 rounded-none";

  return (
    <section id="konsultasi" className="relative w-full py-20">
      <div className="max-w-[1388px] mx-auto relative flex flex-col md:flex-row px-4 md:px-0">
        <div className="md:w-[500px] w-full md:ml-[120px] mb-16 md:mb-0">
          <div className="mb-[20px]">
            <h2 className="font-extrabold text-[33px] text-[#1D1F26] mb-[10px]">
              Jadwalkan Konsultasi Gratis
            </h2>
            <p className="font-medium text-[18px] text-[#1D1F26]">
              Lengkapi data di bawah, akan kami hubungi segera!
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-[30px]"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Nama*"
                        className={inputStyle}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Email*"
                        className={inputStyle}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Nomor Telepon*"
                        className={inputStyle}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="company"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Perusahaan*"
                        className={inputStyle}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="question"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Pertanyaan*"
                        className={`${inputStyle} h-[90px] resize-none`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="agreement"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex items-start gap-[10px] mt-[20px]">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-[14px] text-[#1D1F26]">
                      Dengan mengirimkan formulir ini, saya setuju untuk
                      menerima email dari Corvidian*
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={loading}
                className="w-[221px] h-[44px] bg-[#1578CB] hover:bg-[#1568BB] rounded-[7px] text-white font-bold text-[18px]"
              >
                {loading ? "Mengirim..." : "Kirim"}
              </Button>
            </form>
          </Form>
        </div>

        <div className="md:ml-auto w-full md:w-[738px] overflow-visible relative">
          <div className="w-full h-auto relative">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src="/schedule/Vector.png"
                alt=""
                fill
                style={{ objectFit: "fill", objectPosition: "right top" }}
              />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center pt-[50px] pb-[60px] pl-[140px] pr-[40px]">
              <div className="ml-[60px] mb-[40px]">
                <h3 className="font-extrabold text-[28px] text-[#F4F4F4]">
                  Apa kata mereka tentang service Corvidian ?
                </h3>
              </div>
              <div className="ml-[40px] flex flex-col justify-between">
                <div className="pr-[9px] mb-[40px] text-white text-[16px]">
                  {testimonials[currentTestimonial].text}
                </div>
                <div className="mb-[40px] text-white text-[14px] italic">
                  <p>{testimonials[currentTestimonial].author}</p>
                  <p>{testimonials[currentTestimonial].position}</p>
                </div>
                <div className="flex justify-center gap-[8px] pr-[100px]">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-[10px] h-[10px] rounded-full ${
                        i === currentTestimonial
                          ? "bg-[#02C2B3]"
                          : "bg-[#C5CED5]"
                      }`}
                    />
                  ))}
                  {Array.from({ length: 7 }, (_, i) => (
                    <div
                      key={i}
                      className="w-[10px] h-[10px] rounded-full bg-[#C5CED5]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
