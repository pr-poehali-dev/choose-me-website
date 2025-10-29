import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-wider">CHOOSE ME</h3>
            <p className="text-gray-300 mb-4">
              Пространство уверенности и эстетики
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pistachio transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-pistachio transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-pistachio transition-colors">
                <Icon name="Phone" size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Навигация</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-pistachio transition-colors">О нас</a></li>
              <li><a href="#services" className="hover:text-pistachio transition-colors">Услуги</a></li>
              <li><a href="#locations" className="hover:text-pistachio transition-colors">Филиалы</a></li>
              <li><a href="#portfolio" className="hover:text-pistachio transition-colors">Портфолио</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Карьера</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#careers" className="hover:text-pistachio transition-colors">Вакансии</a></li>
              <li><a href="#franchise" className="hover:text-pistachio transition-colors">Франшиза</a></li>
              <li><a href="#" className="hover:text-pistachio transition-colors">Обучение</a></li>
              <li><a href="#" className="hover:text-pistachio transition-colors">Наша команда</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Новости и акции</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Подпишитесь на рассылку и узнавайте первыми о новых акциях
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-pistachio hover:bg-pistachio/90">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 CHOOSE ME. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
