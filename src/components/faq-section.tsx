import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Из каких источников данных работает приложение?",
      answer:
        "Book Analytics подключается к вашей кассовой системе (1С, МойСклад, Frontol и другим), импортирует данные из Excel/CSV или получает данные через API. Настройка занимает от 1 часа.",
    },
    {
      question: "Нужны ли специальные технические знания?",
      answer:
        "Нет. Интерфейс разработан для владельцев и менеджеров магазинов без опыта в аналитике. Все графики интерактивны и сопровождаются понятными подсказками.",
    },
    {
      question: "Можно ли работать с несколькими магазинами одновременно?",
      answer:
        "Да, Book Analytics поддерживает сети любого размера. Вы можете просматривать сводные данные по всей сети или детализировать до конкретной торговой точки.",
    },
    {
      question: "Как обеспечивается безопасность данных?",
      answer:
        "Все данные передаются по зашифрованному соединению (TLS 1.3) и хранятся на защищённых серверах в России. Доступ разграничен по ролям: владелец, менеджер, аналитик.",
    },
    {
      question: "Есть ли мобильная версия?",
      answer:
        "Да, приложение полностью адаптировано для смартфонов и планшетов. Ключевые показатели всегда под рукой — в любом месте и в любое время.",
    },
    {
      question: "Сколько стоит и есть ли пробный период?",
      answer:
        "Доступен бесплатный пробный период на 14 дней без ограничений функций и без привязки карты. После — гибкие тарифы в зависимости от количества магазинов.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о подключении, функциях и безопасности Book Analytics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
