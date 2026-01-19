"use client";

import { useRouter } from "next/navigation";

export default function SurveyPreviewPage() {
  const router = useRouter();
  const questions: { id: number; label: string; type: 'radio' | 'photo' | 'textarea'; options?: string[] }[] = [
    {
      id: 1,
      label: '¿El material POP de la campaña "Verano" está visible desde la entrada principal?',
      type: 'radio',
      options: [
        'Sí, es claramente visible',
        'No, está obstruido o ausente',
        'Parcialmente visible',
      ],
    },
    {
      id: 2,
      label: 'Fotografía de la exhibición principal',
      type: 'photo',
    },
    {
      id: 3,
      label: 'Observaciones adicionales sobre el estado del local',
      type: 'textarea',
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-manrope text-text-main dark:text-gray-100">
      <div className="relative w-full max-w-md mx-auto min-h-screen bg-background-light dark:bg-background-dark flex flex-col shadow-2xl">
        <div className="w-full h-12 bg-background-light dark:bg-background-dark flex items-end justify-center pb-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
            <span className="material-symbols-outlined text-[14px] mr-1">visibility</span>
            Modo Previsualización
          </span>
        </div>

        <div className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-5 py-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Encuesta #4092</span>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">Evaluación Punto de Venta</h1>
          </div>
          <button
            aria-label="Cerrar vista previa"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
            onClick={() => router.push("/surveys/builder")}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 h-1">
          <div className="bg-primary h-1 transition-all duration-500 ease-out" style={{ width: '35%' }} />
        </div>

        <main className="flex-1 overflow-y-auto no-scrollbar p-5 pb-32 space-y-6">
          <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-card border border-gray-100 dark:border-gray-700">
            <div className="h-10 w-10 rounded-full bg-gray-100 overflow-hidden">
              <img
                alt="Sucursal Centro Histórico"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR8AvSJXtezW8bEtKlH46ikNFiDsunSWpY7GO2Gg8frssbpDH684YONnG8SLQlSDpZqEzOx6nf7un5A0eE6qlfDpXLxa9c3WqKiMOV8OVn3J2c6bgPbloVR5M1hnSKCFz-kgYuuv1Ls34x5Dl-ozfSW2I4S8P_IBqA-K3jtuN95eJfsou5Tr52rSkRS_wsdivbdjqB_NHqTPwydn7FvxwM6-NGfHqZDBzLHP8jCC3DEwGdVxAIq1fA-DYPwbCAOgOYTmjlSAt99Kw"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Sucursal Centro Histórico</p>
              <div className="flex items-center gap-1 text-xs text-text-secondary">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                Av. Madero #45, CDMX
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(event) => event.preventDefault()}>
            {questions.map((question) => (
              <QuestionPreview key={question.id} question={question} />
            ))}
          </form>
          <div className="h-10" />
        </main>

        <div className="absolute bottom-0 w-full bg-white dark:bg-background-dark/95 border-t border-gray-200 dark:border-gray-700 p-5 backdrop-blur-sm z-30">
          <button
            type="button"
            className="w-full rounded-xl bg-primary px-3.5 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            onClick={() => router.push("/surveys/confirmation")}
          >
            <span>Enviar Respuestas</span>
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
          <p className="text-center text-[10px] text-gray-400 mt-3">
            Esto es una simulación. No se guardarán datos reales.
          </p>
        </div>
      </div>
    </div>
  );
}

const QuestionPreview = ({
  question,
}: {
  question: { id: number; label: string; type: 'radio' | 'photo' | 'textarea'; options?: string[] };
}) => (
  <div className="space-y-3">
    <div className="flex gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
        {question.id}
      </span>
      <p className="text-base font-semibold text-text-main dark:text-white leading-snug">{question.label}</p>
    </div>
    <div className="ml-9">
      {question.type === 'radio' && (
        <div className="flex flex-col gap-3">
          {question.options?.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 dark:border-gray-700 p-4 transition-all hover:border-primary/50 hover:bg-primary/5 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
            >
              <div className="flex h-5 items-center">
                <input type="radio" className="h-5 w-5 border-gray-300 text-primary focus:ring-primary" name={`q${question.id}`} />
              </div>
              <div className="text-sm leading-5 text-text-main dark:text-white">{option}</div>
            </label>
          ))}
        </div>
      )}
      {question.type === 'photo' && (
        <div className="rounded-lg border border-dashed border-gray-300 dark:border-gray-700 px-6 py-8 text-center hover:border-primary/50 hover:bg-gray-50 transition-colors dark:hover:bg-gray-800">
          <span className="material-symbols-outlined text-gray-400 text-4xl mb-2">add_a_photo</span>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-primary">Subir foto</span> o tomar directo desde la cámara
          </p>
          <p className="text-xs text-text-secondary mt-1">PNG, JPG hasta 10 MB</p>
        </div>
      )}
      {question.type === 'textarea' && (
        <div className="relative rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
          <textarea
            className="block w-full rounded-lg border-0 py-3 text-sm text-text-main dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="Escribe tus comentarios aquí..."
            rows={3}
          />
          <div className="absolute bottom-2 right-3 text-xs text-text-secondary">0/250</div>
        </div>
      )}
    </div>
  </div>
);
