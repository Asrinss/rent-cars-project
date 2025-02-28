"use client"; // Client tarafında çalışacağını belirtir

// Gerekli kütüphanelerin import edilmesi
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"; // Form doğrulama çözücüsü
import { useForm } from "react-hook-form"; // Form yönetimi için
import { z } from "zod"; // Form şema doğrulaması için
import { Button } from "@/components/ui/button"; // UI buton komponenti
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"; // Form UI komponentleri

// İkonların import edilmesi
import { FaCalendarAlt, FaCar, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

// Select (Seçim) komponentlerinin import edilmesi
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Tarih işlemleri için gerekli importlar
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

// Popover (Açılır pencere) komponentlerinin import edilmesi
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useRouter } from 'next/navigation'; // Sayfa yönlendirmesi için

// Bugünün tarihini al ve saat bilgisini sıfırla
const today = new Date();
today.setHours(0, 0, 0, 0);

// Form şeması tanımlaması - Zod ile form doğrulama kuralları
const formSchema = z.object({
  carType: z.string().nonempty("Please select a car type."),
  pickupLocation: z.string().nonempty("Please select a pickup location."),
  pickupDate: z.date().min(today, { message: "Pickup date must be after today." }),
  dropoffLocation: z.string().nonempty("Please select a dropoff location."),
  returnDate: z.date().min(today, { message: "Return date must be after today." }),
}).refine(data => data.pickupDate < data.returnDate, {
  message: "Return date must be after pickup date",
  path: ["returnDate"],
});

const MainForm = () => {
  const router = useRouter(); // Yönlendirme hook'u

  // Form hook'unun kurulumu ve varsayılan değerlerin atanması
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      carType: "",
      pickupLocation: "",
      pickupDate: today,
      dropoffLocation: "",
      returnDate: today,
    },
  });

  // Form gönderildiğinde çalışacak fonksiyon
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    router.push(`/cars?carType=${values.carType}`);
  };

  return (
    // Ana form container'ı - Responsive tasarım için CSS sınıfları
    <div className='absolute MainFormBg w-10/12 left-1/2 transform -translate-x-1/2 shadow-lg xl:rounded-full xl:bottom-[50px] px-4 z-50 -bottom-[550px] rounded-2xl md:-bottom-[220px] lg:-bottom-[150px]'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 md:grid-cols-2 p-4 lg:grid-cols-8 xl:grid-cols-11 gap-8 MainFormLabel'>
            
            {/* Araç Tipi Seçim Alanı */}
            <div className='flex w-full items-center gap-4 lg:border-r lg:col-span-2 border-gray-400 pr-4'>
              <FaCar className='text-4xl' />
              <FormField
                control={form.control}
                name="carType"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='text-sm'>Car Type</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="MainFormInputbg">
                          <SelectValue placeholder="Choose Car Type" />
                        </SelectTrigger>
                        <SelectContent className='MainFormInputbg'>
                          <SelectGroup>
                            <SelectItem value="Suv">SUV</SelectItem>
                            <SelectItem value="Sedan">Sedan</SelectItem>
                            <SelectItem value="Hatchback">Hatchback</SelectItem>
                            <SelectItem value="Luxury Car">Luxury</SelectItem>
                            <SelectItem value="Cabrio">Cabrio</SelectItem>
                            <SelectItem value="Crossover">Crossover</SelectItem>
                            <SelectItem value="Sport Car">Sport Car</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Alış Lokasyonu Seçim Alanı */}
            <div className='flex items-center gap-4 lg:border-r lg:col-span-2 border-gray-400 pr-4'>
              <FaMapMarkerAlt className='text-4xl' />
              <FormField
                control={form.control}
                name="pickupLocation"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='text-sm'>Pickup Location</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="MainFormInputbg">
                          <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent className='MainFormInputbg'>
                          <SelectGroup>
                            <SelectItem value="Izmir">Izmir</SelectItem>
                            <SelectItem value="Ankara">Ankara</SelectItem>
                            <SelectItem value="Istanbul">Istanbul</SelectItem>
                            <SelectItem value="Adana">Adana</SelectItem>
                            <SelectItem value="Bursa">Bursa</SelectItem>
                            <SelectItem value="Van">Van</SelectItem>
                            <SelectItem value="Sivas">Sivas</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Alış Tarihi Seçim Alanı */}
            <div className='flex w-full items-center gap-4 lg:border-r lg:col-span-2 border-gray-400 pr-4'>
              <FaCalendarAlt className='text-4xl' />
              <FormField
                control={form.control}
                name="pickupDate"
                render={({ field }) => (
                  <FormItem className='w-full flex-col flex'>
                    <FormLabel className='text-sm'>Pickup Date</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "justify-start text-left font-normal MainFormInputbg",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 MainFormInputbg">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Teslim Lokasyonu Seçim Alanı */}
            <div className='flex items-center gap-4 lg:border-r lg:col-span-2 border-gray-400 pr-4'>
              <FaMapMarkerAlt className='text-4xl' />
              <FormField
                control={form.control}
                name="dropoffLocation"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='text-sm'>Dropoff Location</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="MainFormInputbg">
                          <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent className='MainFormInputbg'>
                          <SelectGroup>
                            <SelectItem value="Izmir">Izmir</SelectItem>
                            <SelectItem value="Ankara">Ankara</SelectItem>
                            <SelectItem value="Istanbul">Istanbul</SelectItem>
                            <SelectItem value="Adana">Adana</SelectItem>
                            <SelectItem value="Bursa">Bursa</SelectItem>
                            <SelectItem value="Van">Van</SelectItem>
                            <SelectItem value="Sivas">Sivas</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Teslim Tarihi Seçim Alanı */}
            <div className='flex w-full items-center gap-4 lg:border-r lg:col-span-2 border-gray-400 pr-4'>
              <FaCalendarAlt className='text-4xl' />
              <FormField
                control={form.control}
                name="returnDate"
                render={({ field }) => (
                  <FormItem className='w-full flex-col flex'>
                    <FormLabel className='text-sm'>Return Date</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "justify-start text-left font-normal MainFormInputbg",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 MainFormInputbg">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Arama Butonu */}
            <div className='flex items-center justify-center'>
              <Button type="submit" variant="mybutton" size="xl">
                <FaSearch />
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MainForm;