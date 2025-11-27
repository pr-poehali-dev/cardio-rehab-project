import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const programs = [
    {
      title: "Ранняя реабилитация",
      description: "Комплексная программа для пациентов в острый период после инфаркта или операции",
      duration: "14-21 день",
      icon: "Heart"
    },
    {
      title: "Интенсивная реабилитация",
      description: "Активная фаза восстановления с индивидуальными тренировками и мониторингом",
      duration: "21-30 дней",
      icon: "Activity"
    },
    {
      title: "Поддерживающая программа",
      description: "Долгосрочная программа для закрепления результатов и профилактики рецидивов",
      duration: "60+ дней",
      icon: "TrendingUp"
    }
  ];

  const specialists = [
    {
      name: "Петров Алексей Михайлович",
      position: "Кардиолог, д.м.н.",
      experience: "25 лет опыта",
      specialty: "Реабилитация после инфаркта"
    },
    {
      name: "Смирнова Елена Владимировна",
      position: "Врач ЛФК, к.м.н.",
      experience: "18 лет опыта",
      specialty: "Кардиореабилитация"
    },
    {
      name: "Козлов Дмитрий Андреевич",
      position: "Физиотерапевт",
      experience: "15 лет опыта",
      specialty: "Физическая реабилитация"
    }
  ];

  const stats = [
    { value: "95%", label: "Успешных реабилитаций" },
    { value: "2500+", label: "Пациентов помогли" },
    { value: "15+", label: "Лет работы" },
    { value: "20+", label: "Специалистов" }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <span className="text-xl font-bold text-secondary">КардиоЦентр</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О центре</a>
              <a href="#programs" className="text-sm font-medium hover:text-primary transition-colors">Программы</a>
              <a href="#specialists" className="text-sm font-medium hover:text-primary transition-colors">Специалисты</a>
              <a href="#results" className="text-sm font-medium hover:text-primary transition-colors">Результаты</a>
              <Button asChild>
                <a href="#consultation">Записаться</a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">Ведущий центр реабилитации</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Медицинская реабилитация при заболеваниях сердечно-сосудистой системы
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональная помощь в восстановлении после инфаркта, операций и других кардиологических заболеваний
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#consultation">
                    Записаться на консультацию
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#programs">Программы реабилитации</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/6d12ce18-b295-4987-a1d5-4f74d820879e/files/7a394a48-a11a-4920-a215-bb6ae2ad9a3d.jpg" 
                alt="Медицинский центр реабилитации"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">О центре</h2>
            <p className="text-lg text-muted-foreground">
              Мы специализируемся на комплексной медицинской реабилитации пациентов с сердечно-сосудистыми заболеваниями, используя современные методики и персонализированный подход
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-primary" size={24} />
                </div>
                <CardTitle>Опытные специалисты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Команда врачей высшей категории с международными сертификатами
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Stethoscope" className="text-primary" size={24} />
                </div>
                <CardTitle>Современное оборудование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Новейшие технологии диагностики и мониторинга состояния пациентов
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Персонализированные программы с учетом особенностей каждого пациента
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Программы реабилитации</h2>
            <p className="text-lg text-muted-foreground">
              Комплексные программы восстановления, разработанные с учетом стадии заболевания и индивидуальных особенностей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon name={program.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">{program.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ChevronRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="specialists" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши специалисты</h2>
            <p className="text-lg text-muted-foreground">
              Команда профессионалов с многолетним опытом в кардиореабилитации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {specialists.map((specialist, index) => (
              <Card key={index} className="animate-fade-in text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={48} />
                  </div>
                  <CardTitle className="text-xl">{specialist.name}</CardTitle>
                  <CardDescription className="text-sm font-medium">{specialist.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-2">{specialist.experience}</Badge>
                  <p className="text-sm text-muted-foreground mt-2">{specialist.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <img 
              src="https://cdn.poehali.dev/projects/6d12ce18-b295-4987-a1d5-4f74d820879e/files/b5d2514e-503d-4513-a034-7a6b6bcac8d6.jpg" 
              alt="Команда специалистов"
              className="rounded-2xl shadow-2xl max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      <section id="results" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Результаты лечения</h2>
            <p className="text-lg text-muted-foreground">
              Наша статистика говорит сама за себя
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://cdn.poehali.dev/projects/6d12ce18-b295-4987-a1d5-4f74d820879e/files/a99a7c40-495a-44c6-a70a-3a0a256ecdfe.jpg" 
                    alt="Успешная реабилитация"
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div>
                  <Icon name="Quote" className="text-primary mb-4" size={48} />
                  <p className="text-lg mb-4">
                    "После инфаркта я думал, что моя жизнь больше не будет прежней. Благодаря программе реабилитации в КардиоЦентре я полностью восстановился и вернулся к активной жизни."
                  </p>
                  <div className="font-medium">Владимир К., 58 лет</div>
                  <div className="text-sm text-muted-foreground">Пациент центра</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="consultation" className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Запись на консультацию</h2>
              <p className="text-lg opacity-90">
                Оставьте заявку, и мы свяжемся с вами для подбора оптимальной программы реабилитации
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message"
                      placeholder="Расскажите о вашей ситуации..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" size={28} />
                <span className="text-lg font-bold">КардиоЦентр</span>
              </div>
              <p className="text-sm opacity-80">
                Ведущий центр медицинской реабилитации при заболеваниях сердечно-сосудистой системы
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@cardio-center.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Медицинская, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <div className="space-y-2 text-sm opacity-80">
                <div><a href="#about" className="hover:opacity-100 transition-opacity">О центре</a></div>
                <div><a href="#programs" className="hover:opacity-100 transition-opacity">Программы</a></div>
                <div><a href="#specialists" className="hover:opacity-100 transition-opacity">Специалисты</a></div>
                <div><a href="#results" className="hover:opacity-100 transition-opacity">Результаты</a></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">График работы</h3>
              <div className="space-y-2 text-sm opacity-80">
                <div>Пн-Пт: 8:00 - 20:00</div>
                <div>Сб-Вс: 9:00 - 18:00</div>
                <div className="mt-4">
                  <Badge className="bg-white text-secondary">Работаем без выходных</Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 КардиоЦентр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
