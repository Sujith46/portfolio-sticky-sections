'use client'

export const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer px-10 py-20 flex justify-between items-center">
      <div className="footer_social-links flex gap-4">
        <a className="tracking-tight font-semibold">Instagram</a>
        <a className="tracking-tight font-semibold">Twitter</a>
      </div>
      <div
        className="tracking-tight font-semibold cursor-pointer flex gap-1 items-center group"
        onClick={goToTop}
      >
        Back to top
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            className="group-hover:-translate-y-2 transition-all"
          >
            <path d="M12.9999 7.82843V20H10.9999V7.82843L5.63589 13.1924L4.22168 11.7782L11.9999 4L19.778 11.7782L18.3638 13.1924L12.9999 7.82843Z"></path>
          </svg>
        </span>
      </div>
      <div className="tracking-tight font-semibold">Copyright©Sujith 2023</div>
    </div>
  );
};
