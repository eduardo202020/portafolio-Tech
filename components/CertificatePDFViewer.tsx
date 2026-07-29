import { useEffect, useState } from "react";

type CertificatePDFViewerProps = {
  documentPath: string;
  title: string;
  onClose: () => void;
};

export default function CertificatePDFViewer({
  documentPath,
  title,
  onClose,
}: CertificatePDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const viewerSeparator = documentPath.includes("#") ? "&" : "#";
  const nativeViewerUrl = `${documentPath}${viewerSeparator}view=FitH&toolbar=1&navpanes=0`;
  const downloadPath = documentPath.split("#")[0];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-2 backdrop-blur-md md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Visor del certificado ${title}`}
    >
      <div className="flex h-[96vh] w-full max-w-7xl flex-col overflow-hidden rounded-[24px] border border-white/15 bg-[#0b0b0b] shadow-[0_30px_120px_rgba(0,0,0,0.75)] md:h-[92vh]">
        <header className="flex flex-col gap-4 border-b border-white/10 bg-[#111] px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-red-400">
              Certificado · documento PDF
            </p>
            <h2 className="mt-2 truncate text-base text-stone-100 md:text-lg">
              {title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={documentPath}
              target="_blank"
              rel="noreferrer"
              className="pdf-toolbar-button px-3"
            >
              Abrir en otra pestaña
            </a>
            <a
              href={downloadPath}
              download
              className="pdf-toolbar-button px-3"
            >
              Descargar
            </a>
            <button
              type="button"
              onClick={onClose}
              className="pdf-toolbar-button border-red-500/40 px-3 text-red-300 hover:border-red-400 hover:text-red-200"
              autoFocus
            >
              Cerrar
            </button>
          </div>
        </header>

        <div className="relative min-h-0 flex-1 overflow-hidden bg-[#252525]">
          {isLoading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="rounded-full border border-white/10 bg-black/60 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-300">
                Cargando documento…
              </div>
            </div>
          )}

          <iframe
            src={nativeViewerUrl}
            title={`Certificado: ${title}`}
            className="h-full w-full border-0 bg-white"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
