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
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://cdn.poehali.dev/projects/64b4b2b6-c7fd-46ea-847f-88ad9cd0ffa8/files/0929809c-eda6-4a3a-8005-db3dc4933624.jpg')` 
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            CHOOSE ME
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Пространство уверенности и эстетики
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-pistachio hover:bg-pistachio/90 text-white text-lg px-8 py-6"
              onClick={() => setBookingOpen(true)}
            >
              Записаться
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-dark-gray text-lg px-8 py-6"
            >
              Подарочный сертификат
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Персональный дизайн, премиальные материалы и забота о вас
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pistachio/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pistachio group-hover:text-white transition-colors">
                    <Icon name={service.icon} size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-2xl font-bold text-pistachio mb-1">{service.price}</p>
                  <p className="text-sm text-muted-foreground">{service.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
              <p className="text-lg mb-6 leading-relaxed">
                CHOOSE ME — сеть авторских студий маникюра для уверенных и стильных девушек.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Мы соединяем эстетику, динамику и комфорт: современный маникюр, педикюр, брови и уход, 
                выполненные грамотными мастерами в приятной атмосфере за чашкой ароматного чая или какао с маршмеллоу.
              </p>
              <p className="text-lg font-semibold text-pistachio">
                CHOOSE ME — это больше, чем студии маникюра. Это пространство выбора.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/64b4b2b6-c7fd-46ea-847f-88ad9cd0ffa8/files/44e1ae12-0d65-4856-b297-969d899c5ff2.jpg"
                alt="Маникюр CHOOSE ME" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-pistachio rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Авторские дизайны от наших мастеров
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg cursor-pointer animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/64b4b2b6-c7fd-46ea-847f-88ad9cd0ffa8/files/f4d728ab-0ba6-48ab-9124-0b0cc760a8bc.jpg"
                  alt={`Работа ${i}`}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dark-gray">
                    Подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши филиалы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите удобную студию
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <Icon name="MapPin" size={24} className="text-pistachio mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                      <p className="text-muted-foreground mb-1">{location.address}</p>
                      <p className="text-sm text-pistachio flex items-center">
                        <Icon name="Train" size={16} className="mr-1" />
                        {location.metro}
                      </p>
                    </div>
                  </div>
                  <Button className="w-full bg-pistachio hover:bg-pistachio/90" onClick={() => setBookingOpen(true)}>
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Всегда ищем красивых людей
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Иди к вершинам вместе с CHOOSE ME
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Sparkles" size={32} className="mx-auto mb-3 text-pistachio" />
                <h3 className="font-semibold mb-2">Мастер маникюра</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Владеешь современными техниками и любишь детали
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Eye" size={32} className="mx-auto mb-3 text-pistachio" />
                <h3 className="font-semibold mb-2">Мастер по бровям</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Создаёшь выразительный взгляд
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Heart" size={32} className="mx-auto mb-3 text-pistachio" />
                <h3 className="font-semibold mb-2">Администратор</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ты лицо CHOOSE ME
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Отправить заявку</h3>
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

      <section id="franchise" className="py-20 bg-beige">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Франшиза CHOOSE ME
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Станьте владельцем собственной студии CHOOSE ME
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <Icon name="TrendingUp" size={32} className="text-pistachio mb-3" />
                <h3 className="font-semibold mb-2">Проверенная модель</h3>
                <p className="text-sm text-muted-foreground">
                  Минимальные риски, высокая окупаемость
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Icon name="Users" size={32} className="text-pistachio mb-3" />
                <h3 className="font-semibold mb-2">Поддержка и обучение</h3>
                <p className="text-sm text-muted-foreground">
                  Команда экспертов всегда рядом
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Icon name="Zap" size={32} className="text-pistachio mb-3" />
                <h3 className="font-semibold mb-2">Сильный бренд</h3>
                <p className="text-sm text-muted-foreground">
                  Узнаваемость и постоянный поток клиентов
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Icon name="Rocket" size={32} className="text-pistachio mb-3" />
                <h3 className="font-semibold mb-2">Масштабирование</h3>
                <p className="text-sm text-muted-foreground">
                  Расширяйте сеть студий в своём городе
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Оставить заявку на франшизу</h3>
              <form onSubmit={handleFranchiseSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="franchise-name">Имя</Label>
                    <Input id="franchise-name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="franchise-phone">Телефон</Label>
                    <Input id="franchise-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="franchise-email">Email</Label>
                    <Input id="franchise-email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="franchise-city">Город</Label>
                    <Input id="franchise-city" placeholder="Ваш город" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="franchise-message">Сообщение</Label>
                  <Textarea id="franchise-message" placeholder="Расскажите о своих планах" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-pistachio hover:bg-pistachio/90">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;
