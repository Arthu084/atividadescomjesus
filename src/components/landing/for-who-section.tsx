
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";

const audience = [
  { emoji: "👩‍👧", text: "Mães com filhos pequenos" },
  { emoji: "👨‍👧", text: "Pais que ensinam em casa" },
  { emoji: "👩‍🏫", text: "Professores da Escola Bíblica / Catequese" },
  { emoji: "🎨", text: "Ministério Infantil (tias do culto das crianças)" },
  { emoji: "🙋‍♀️", text: "Catequistas das igrejas católicas" },
  { emoji: "👵", text: "Avós que desejam atividades para os netos" },
];

export default function ForWhoSection() {
  return (
    <SectionWrapper className="pt-8 pb-12">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-headline font-bold text-headline">
          Para quem é esse material?
        </h2>
        <p className="text-muted-foreground text-lg">
          Esse material foi criado para quem quer ensinar a Bíblia às crianças de forma simples, leve e divertida.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mt-8">
        <Card className="shadow-lg bg-card border-none">
          <CardContent className="p-6 md:p-8">
            <ul className="space-y-4">
              {audience.map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-left">
                  <span className="text-2xl md:text-3xl">{item.emoji}</span>
                  <span className="text-base md:text-lg font-medium text-secondary-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto text-lg">
        Se você convive e ensina crianças, esse material facilita sua rotina e transforma o aprendizado em um momento especial.
      </p>
    </SectionWrapper>
  );
}
