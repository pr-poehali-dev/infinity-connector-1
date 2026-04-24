import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Елена Соколова",
    role: "Директор сети «Книжный мир», 12 магазинов",
    avatar: "/professional-woman-scientist.png",
    content:
      "Раньше мы тратили два дня на подготовку отчётов для поставщиков. Теперь — 15 минут. Продажи выросли на 23% благодаря точным закупкам.",
  },
  {
    name: "Андрей Климов",
    role: "Коммерческий директор, издательство «Страница»",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Наконец видим реальную картину по каждой торговой точке. Аналитика помогла нам пересмотреть ассортимент и сократить неликвиды на 40%.",
  },
  {
    name: "Мария Петрова",
    role: "Владелец магазина «Читай-город», Екатеринбург",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Простой интерфейс, понятные графики. Даже без опыта в аналитике сразу понимаешь, что продаётся, а что лежит мёртвым грузом.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют книготорговцы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят владельцы и руководители книжных магазинов о нашей платформе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
