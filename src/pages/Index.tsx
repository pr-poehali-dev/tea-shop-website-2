import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'catalog' | 'contact'>('home');
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const teas = [
    {
      id: 1,
      name: 'Пуэр',
      description: 'Выдержанный ферментированный чай с глубоким земляным вкусом и терапевтическими свойствами. Идеален для медитации.',
      image: 'https://cdn.poehali.dev/projects/bc32cbdf-fe2f-4cc9-bfb1-571729d5b833/files/b7bfabda-4fea-4930-b890-3621aa783116.jpg',
      characteristics: ['Тёмный', 'Землистый', 'Выдержанный']
    },
    {
      id: 2,
      name: 'Улун',
      description: 'Полуферментированный чай с цветочно-фруктовыми нотами и медовым послевкусием. Баланс между зелёным и чёрным чаем.',
      image: 'https://cdn.poehali.dev/projects/bc32cbdf-fe2f-4cc9-bfb1-571729d5b833/files/444d0474-bff9-46b8-9836-3b27c94b1f7a.jpg',
      characteristics: ['Янтарный', 'Цветочный', 'Сбалансированный']
    },
    {
      id: 3,
      name: 'Белый чай',
      description: 'Деликатный чай из молодых почек с нежным сладковатым вкусом и изысканным ароматом. Минимальная обработка.',
      image: 'https://cdn.poehali.dev/projects/bc32cbdf-fe2f-4cc9-bfb1-571729d5b833/files/c5c00f73-150c-4c23-914c-08277307fa27.jpg',
      characteristics: ['Светлый', 'Нежный', 'Свежий']
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">茶 Чайная лавка</h1>
          <div className="flex gap-6">
            <button
              onClick={() => setActiveSection('home')}
              className={`text-lg transition-colors ${
                activeSection === 'home' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection('catalog')}
              className={`text-lg transition-colors ${
                activeSection === 'catalog' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={`text-lg transition-colors ${
                activeSection === 'contact' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Контакты
            </button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="pt-24 pb-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Искусство китайской чайной церемонии
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Откройте для себя мир настоящего китайского чая. Каждый сорт — это путешествие в тысячелетнюю историю и культуру Поднебесной.
                </p>
                <Button
                  size="lg"
                  onClick={() => setActiveSection('catalog')}
                  className="text-lg px-8 py-6 mt-4 transition-all hover:scale-105"
                >
                  Посмотреть каталог
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://cdn.poehali.dev/projects/bc32cbdf-fe2f-4cc9-bfb1-571729d5b833/files/c1c77c9f-381a-4795-bbb7-d6124373fff6.jpg"
                  alt="Китайская чайная церемония"
                  className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
              <Card className="border-2 transition-all hover:shadow-lg hover:scale-105">
                <CardContent className="pt-8 pb-6 text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Leaf" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Натуральные сорта</h3>
                  <p className="text-muted-foreground">Только проверенные чайные плантации Китая</p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:shadow-lg hover:scale-105">
                <CardContent className="pt-8 pb-6 text-center space-y-3">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Премиум качество</h3>
                  <p className="text-muted-foreground">Тщательный отбор листьев и правильное хранение</p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:shadow-lg hover:scale-105">
                <CardContent className="pt-8 pb-6 text-center space-y-3">
                  <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Heart" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">С душой</h3>
                  <p className="text-muted-foreground">Делимся знаниями о культуре чаепития</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="pt-24 pb-20 animate-fade-in">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Оставьте заявку, и мы поможем подобрать идеальный чай для вас
              </p>
            </div>

            <Card className="border-2 shadow-xl">
              <CardContent className="p-8">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    
                    toast({
                      title: 'Спасибо за обращение!',
                      description: 'Мы свяжемся с вами в ближайшее время.',
                    });
                    
                    setFormData({ name: '', phone: '', message: '' });
                    setIsSubmitting(false);
                  }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Как к вам обращаться?"
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите, какой чай вас интересует или задайте вопрос..."
                      rows={5}
                      className="text-base resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-lg py-6 transition-all hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                        Отправка...
                      </>
                    ) : (
                      <>
                        Отправить заявку
                        <Icon name="Send" className="ml-2" size={20} />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Адрес</h4>
                        <p className="text-muted-foreground text-sm">г. Москва, ул. Чайная, д. 108</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={20} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Часы работы</h4>
                        <p className="text-muted-foreground text-sm">Пн-Вс: 10:00 - 20:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'catalog' && (
        <section className="pt-24 pb-20 animate-fade-in">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Наш каталог</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Коллекция избранных сортов китайского чая для истинных ценителей
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teas.map((tea, index) => (
                <Card
                  key={tea.id}
                  className="overflow-hidden border-2 transition-all hover:shadow-2xl hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={tea.image}
                      alt={tea.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold">{tea.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{tea.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {tea.characteristics.map((char) => (
                        <span
                          key={char}
                          className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Coffee" size={24} className="text-primary" />
            <span className="text-2xl font-bold">茶 Чайная лавка</span>
          </div>
          <p className="text-muted-foreground">Откройте для себя искусство настоящего китайского чая</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;