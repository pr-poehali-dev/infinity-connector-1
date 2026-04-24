import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Динамические графики продаж",
    description: "Интерактивные диаграммы и графики динамики продаж по жанрам, авторам, издательствам и периодам времени.",
    icon: "chart",
    badge: "Аналитика",
  },
  {
    title: "Топ-листы и рейтинги",
    description: "Автоматически обновляемые рейтинги бестселлеров с фильтрацией по категориям, цене и целевой аудитории.",
    icon: "trophy",
    badge: "Рейтинги",
  },
  {
    title: "Прогноз спроса",
    description: "ML-модели предсказывают будущие продажи на основе сезонности, трендов и исторических данных с точностью 94%.",
    icon: "zap",
    badge: "ИИ",
  },
  {
    title: "Складской контроль",
    description: "Мониторинг остатков в реальном времени, автоматические уведомления о дефиците и оптимизация закупок.",
    icon: "box",
    badge: "Склад",
  },
  {
    title: "Сравнение магазинов",
    description: "Сопоставление показателей нескольких торговых точек на единой панели для управленческих решений.",
    icon: "globe",
    badge: "Сеть",
  },
  {
    title: "Экспорт и отчёты",
    description: "Гибкие отчёты в PDF, Excel и PowerPoint с брендированием для презентаций партнёрам и поставщикам.",
    icon: "file",
    badge: "Отчёты",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности платформы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё необходимое для принятия взвешенных решений в книжной торговле — в одном приложении
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "chart" && "📊"}
                    {feature.icon === "trophy" && "🏆"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "box" && "📦"}
                    {feature.icon === "globe" && "🌐"}
                    {feature.icon === "file" && "📄"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
