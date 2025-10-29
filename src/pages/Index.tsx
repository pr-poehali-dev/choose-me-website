import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { toast } = useToast();

  const services = [
    { icon: 'Sparkles', title: 'Маникюр', price: 'от 1500 ₽', duration: '60 мин' },
    { icon: 'Heart', title: 'Педикюр', price: 'от 2000 ₽', duration: '90 мин' },
    { icon: 'Eye', title: 'Брови', price: 'от 800 ₽', duration: '30 мин' },
    { icon: 'Star', title: 'Ресницы', price: 'от 2500 ₽', duration: '120 мин' }
  ];

  const values = [
    { icon: 'Award', title: 'Качество', description: 'Сертифицированные материалы и стерильность' },
    { icon: 'Home', title: 'Атмосфера', description: 'Свет, комфорт и эстетика' },
    { icon: 'Smile', title: 'Уверенность', description: 'Результат, который чувствуется' },
    { icon: 'Users', title: 'Команда', description: 'Профессиональные мастера с опытом' }
  ];

  const locations = [
    { name: 'Центр города', address: 'ул. Ленина, 45', metro: 'Площадь Революции' },
    { name: 'ТЦ "Галерея"', address: 'пр. Мира, 112', metro: 'Проспект Мира' },
    { name: 'Северный район', address: 'ул. Северная, 23', metro: 'Речной вокзал' }
  ];

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
  };

  const handleFranchiseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка принята!',
      description: 'Наш менеджер свяжется с вами для обсуждения деталей франшизы.',
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center parallax-bg"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://cdn.poehali.dev/projects/64b4b2b6-c7fd-46ea-847f-88ad9cd0ffa8/files/0929809c-eda6-4a3a-8005-db3dc4933624.jpg')` 
        }}
      >
        <div className="container mx-auto px-4 text-left text-white animate-fade-in max-w-7xl">
          <h1 className="hero-title mb-8">
            CHOOSE<br />ME
          </h1>
          <p className="text-lg md:text-xl mb-12 max-w-xl font-light tracking-wide">
            ПРОСТРАНСТВО УВЕРЕННОСТИ<br />И ЭСТЕТИКИ
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-pistachio hover:bg-pistachio/90 text-black text-sm px-10 py-7 uppercase tracking-widest font-semibold"
              onClick={() => setBookingOpen(true)}
            >
              Записаться
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white hover:text-black text-sm px-10 py-7 uppercase tracking-widest backdrop-blur-sm bg-white/5"
            >
              Сертификат
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="section-full bg-black text-white py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">УСЛУГИ</h2>
          <p className="text-white/60 mb-16 text-lg tracking-wide">
            ПЕРСОНАЛЬНЫЙ ДИЗАЙН / ПРЕМИАЛЬНЫЕ МАТЕРИАЛЫ / ЗАБОТА О ВАС
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group border border-white/10 p-10 hover:bg-white/5 transition-all duration-500 cursor-pointer animate-fade-in-up backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon name={service.icon} size={40} className="text-pistachio" />
                  <span className="text-white/40 text-sm uppercase tracking-wider">{service.duration}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 uppercase tracking-wider">{service.title}</h3>
                <p className="text-4xl font-bold text-pistachio">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-full bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">О НАС</h2>
              <p className="text-lg mb-6 leading-relaxed text-gray-600">
                CHOOSE ME — сеть авторских студий маникюра для уверенных и стильных девушек.
              </p>
              <p className="text-lg mb-6 leading-relaxed text-gray-600">
                Мы соединяем эстетику, динамику и комфорт: современный маникюр, педикюр, брови и уход, выполненные грамотными мастерами.
              </p>
              <p className="text-xl font-bold text-pistachio uppercase tracking-wider">
                ПРОСТРАНСТВО ВЫБОРА
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/64b4b2b6-c7fd-46ea-847f-88ad9cd0ffa8/files/44e1ae12-0d65-4856-b297-969d899c5ff2.jpg"
                alt="Маникюр CHOOSE ME" 
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-24">
            {values.map((value, index) => (
              <div key={index} className="border border-gray-200 p-8 hover:bg-gray-50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Icon name={value.icon} size={32} className="text-pistachio mb-4" />
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wider">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="portfolio" 
        className="section-full bg-cover bg-center parallax-bg py-32"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://cdn.poehali.dev/projects/64b4b2b6-c7fd-46ea-847f-88ad9cd0ffa8/files/f4d728ab-0ba6-48ab-9124-0b0cc760a8bc.jpg')` 
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">НАШИ РАБОТЫ</h2>
          <p className="text-white/60 mb-16 text-lg tracking-wide max-w-2xl">
            АВТОРСКИЕ ДИЗАЙНЫ / ПРОФЕССИОНАЛЬНОЕ ИСПОЛНЕНИЕ / ИНДИВИДУАЛЬНЫЙ ПОДХОД
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white hover:text-black text-sm px-10 py-7 uppercase tracking-widest backdrop-blur-sm bg-white/5"
          >
            Смотреть все работы
          </Button>
        </div>
      </section>

      <section id="locations" className="section-full bg-black text-white py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">ФИЛИАЛЫ</h2>
          <p className="text-white/60 mb-16 text-lg tracking-wide">
            ВЫБЕРИТЕ УДОБНУЮ СТУДИЮ
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
            {locations.map((location, index) => (
              <div key={index} className="border border-white/10 p-8 hover:bg-white/5 transition-all duration-500 animate-fade-in-up backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                <Icon name="MapPin" size={32} className="text-pistachio mb-6" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">{location.name}</h3>
                <p className="text-white/60 mb-2">{location.address}</p>
                <p className="text-sm text-pistachio flex items-center mb-6 uppercase tracking-wider">
                  <Icon name="Train" size={16} className="mr-2" />
                  {location.metro}
                </p>
                <Button className="w-full bg-pistachio hover:bg-pistachio/90 text-black uppercase tracking-wider font-semibold" onClick={() => setBookingOpen(true)}>
                  Записаться
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="section-full bg-white py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            ВАКАНСИИ
          </h2>
          <p className="text-gray-600 mb-12 text-lg tracking-wide">
            ВСЕГДА ИЩЕМ КРАСИВЫХ ЛЮДЕЙ / ИДИ К ВЕРШИНАМ ВМЕСТЕ С CHOOSE ME
          </p>

          <div className="grid md:grid-cols-3 gap-1 mb-16">
            <div className="border border-gray-200 p-8 hover:bg-gray-50 transition-all duration-300">
              <Icon name="Sparkles" size={40} className="text-pistachio mb-4" />
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wider">МАСТЕР МАНИКЮРА</h3>
              <p className="text-sm text-gray-600">
                Владеешь современными техниками и любишь детали
              </p>
            </div>
            <div className="border border-gray-200 p-8 hover:bg-gray-50 transition-all duration-300">
              <Icon name="Eye" size={40} className="text-pistachio mb-4" />
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wider">МАСТЕР ПО БРОВЯМ</h3>
              <p className="text-sm text-gray-600">
                Создаёшь выразительный взгляд
              </p>
            </div>
            <div className="border border-gray-200 p-8 hover:bg-gray-50 transition-all duration-300">
              <Icon name="Heart" size={40} className="text-pistachio mb-4" />
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wider">АДМИНИСТРАТОР</h3>
              <p className="text-sm text-gray-600">
                Ты лицо CHOOSE ME
              </p>
            </div>
          </div>

          <div className="border border-gray-200 p-12 animate-scale-in max-w-2xl">
            <h3 className="text-3xl font-bold mb-8 uppercase tracking-wider">ОТПРАВИТЬ ЗАЯВКУ</h3>
            <form onSubmit={handleCareerSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="career-name">Имя</Label>
                    <Input id="career-name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="career-phone">Телефон</Label>
                    <Input id="career-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="career-position">Вакансия</Label>
                  <Input id="career-position" placeholder="Интересующая должность" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="career-message">О себе</Label>
                  <Textarea id="career-message" placeholder="Расскажите о своём опыте" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-pistachio hover:bg-pistachio/90">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="franchise" className="section-full bg-black text-white py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            ФРАНШИЗА
          </h2>
          <p className="text-white/60 mb-16 text-lg tracking-wide">
            СТАНЬТЕ ВЛАДЕЛЬЦЕМ СОБСТВЕННОЙ СТУДИИ CHOOSE ME
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-all duration-500 backdrop-blur-sm">
              <Icon name="TrendingUp" size={40} className="text-pistachio mb-6" />
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-wider">ПРОВЕРЕННАЯ МОДЕЛЬ</h3>
              <p className="text-white/60">
                Минимальные риски, высокая окупаемость
              </p>
            </div>
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-all duration-500 backdrop-blur-sm">
              <Icon name="Users" size={40} className="text-pistachio mb-6" />
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-wider">ПОДДЕРЖКА</h3>
              <p className="text-white/60">
                Команда экспертов всегда рядом
              </p>
            </div>
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-all duration-500 backdrop-blur-sm">
              <Icon name="Zap" size={40} className="text-pistachio mb-6" />
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-wider">СИЛЬНЫЙ БРЕНД</h3>
              <p className="text-white/60">
                Узнаваемость и постоянный поток клиентов
              </p>
            </div>
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-all duration-500 backdrop-blur-sm">
              <Icon name="Rocket" size={40} className="text-pistachio mb-6" />
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-wider">МАСШТАБИРОВАНИЕ</h3>
              <p className="text-white/60">
                Расширяйте сеть студий в своём городе
              </p>
            </div>
          </div>

          <div className="border border-white/10 p-12 animate-scale-in backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-8 uppercase tracking-wider">ОСТАВИТЬ ЗАЯВКУ</h3>
            <form onSubmit={handleFranchiseSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="franchise-name" className="text-white/60 uppercase text-xs tracking-wider">Имя</Label>
                  <Input id="franchise-name" placeholder="Ваше имя" required className="bg-white/5 border-white/10 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="franchise-phone" className="text-white/60 uppercase text-xs tracking-wider">Телефон</Label>
                  <Input id="franchise-phone" type="tel" placeholder="+7 (___) ___-__-__" required className="bg-white/5 border-white/10 text-white" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="franchise-email" className="text-white/60 uppercase text-xs tracking-wider">Email</Label>
                  <Input id="franchise-email" type="email" placeholder="your@email.com" required className="bg-white/5 border-white/10 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="franchise-city" className="text-white/60 uppercase text-xs tracking-wider">Город</Label>
                  <Input id="franchise-city" placeholder="Ваш город" required className="bg-white/5 border-white/10 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="franchise-message" className="text-white/60 uppercase text-xs tracking-wider">Сообщение</Label>
                <Textarea id="franchise-message" placeholder="Расскажите о своих планах" rows={4} className="bg-white/5 border-white/10 text-white" />
              </div>
              <Button type="submit" className="w-full bg-pistachio hover:bg-pistachio/90 text-black uppercase tracking-wider font-semibold py-6">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;