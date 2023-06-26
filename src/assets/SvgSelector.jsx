import React from "react";

const Svg = ({ name }) => {
  switch (name) {
    case "send":
      return (
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.39844 1.40625L8.08594 1.67969C7.92969 1.875 7.92969 2.14844 8.08594 2.34375L12.6172 6.83594H0.46875C0.195312 6.83594 0 7.07031 0 7.30469V7.69531C0 7.96875 0.195312 8.16406 0.46875 8.16406H12.6172L8.125 12.6953C7.92969 12.8906 7.92969 13.1641 8.125 13.3594L8.39844 13.6328C8.55469 13.8281 8.86719 13.8281 9.0625 13.6328L14.8438 7.85156C15.0391 7.65625 15.0391 7.38281 14.8438 7.1875L9.0625 1.40625C8.86719 1.21094 8.55469 1.21094 8.39844 1.40625ZM17.5 0.46875C17.5 0.234375 17.2656 0 17.0312 0H16.7188C16.4453 0 16.25 0.234375 16.25 0.46875V14.5312C16.25 14.8047 16.4453 15 16.7188 15H17.0312C17.2656 15 17.5 14.8047 17.5 14.5312V0.46875Z" />
          <path d="M8.39844 1.40625L8.48075 1.50032L8.48911 1.49301L8.49605 1.48434L8.39844 1.40625ZM8.08594 1.67969L8.00362 1.58562L7.99527 1.59293L7.98833 1.6016L8.08594 1.67969ZM8.08594 2.34375L7.98833 2.42184L7.99282 2.42745L7.99793 2.43252L8.08594 2.34375ZM12.6172 6.83594V6.96094H12.9208L12.7052 6.74717L12.6172 6.83594ZM12.6172 8.16406L12.706 8.25207L12.9171 8.03906H12.6172V8.16406ZM8.125 12.6953L8.21339 12.7837L8.21377 12.7833L8.125 12.6953ZM8.39844 13.6328L8.49665 13.5542L8.48683 13.5444L8.39844 13.6328ZM8.31612 1.31218L8.00362 1.58562L8.16825 1.77376L8.48075 1.50032L8.31612 1.31218ZM7.98833 1.6016C7.79556 1.84257 7.79556 2.18087 7.98833 2.42184L8.18355 2.26566C8.06382 2.116 8.06382 1.90743 8.18355 1.75777L7.98833 1.6016ZM7.99793 2.43252L12.5292 6.92471L12.7052 6.74717L8.17394 2.25498L7.99793 2.43252ZM12.6172 6.71094H0.46875V6.96094H12.6172V6.71094ZM0.46875 6.71094C0.119641 6.71094 -0.125 7.0081 -0.125 7.30469H0.125C0.125 7.13252 0.270984 6.96094 0.46875 6.96094V6.71094ZM-0.125 7.30469V7.69531H0.125V7.30469H-0.125ZM-0.125 7.69531C-0.125 8.03779 0.126277 8.28906 0.46875 8.28906V8.03906C0.264348 8.03906 0.125 7.89971 0.125 7.69531H-0.125ZM0.46875 8.28906H12.6172V8.03906H0.46875V8.28906ZM12.5284 8.07606L8.03623 12.6073L8.21377 12.7833L12.706 8.25207L12.5284 8.07606ZM8.03661 12.6069C7.91778 12.7258 7.85352 12.8739 7.85352 13.0273C7.85352 13.1808 7.91778 13.3289 8.03661 13.4478L8.21339 13.271C8.1369 13.1945 8.10352 13.1083 8.10352 13.0273C8.10352 12.9464 8.1369 12.8602 8.21339 12.7837L8.03661 12.6069ZM8.03661 13.4478L8.31005 13.7212L8.48683 13.5444L8.21339 13.271L8.03661 13.4478ZM8.30083 13.7109C8.51204 13.9749 8.91291 13.9592 9.15089 13.7212L8.97411 13.5444C8.82147 13.6971 8.59734 13.6813 8.49605 13.5547L8.30083 13.7109ZM9.15089 13.7212L14.9321 7.93995L14.7554 7.76317L8.97411 13.5444L9.15089 13.7212ZM14.9321 7.93995C15.051 7.82112 15.1152 7.67295 15.1152 7.51953C15.1152 7.36611 15.051 7.21794 14.9321 7.09911L14.7554 7.27589C14.8318 7.35237 14.8652 7.43857 14.8652 7.51953C14.8652 7.60049 14.8318 7.68669 14.7554 7.76317L14.9321 7.93995ZM14.9321 7.09911L9.15089 1.31786L8.97411 1.49464L14.7554 7.27589L14.9321 7.09911ZM9.15089 1.31786C8.91291 1.07988 8.51204 1.06415 8.30083 1.32816L8.49605 1.48434C8.59734 1.35772 8.82147 1.34199 8.97411 1.49464L9.15089 1.31786ZM17.625 0.46875C17.625 0.310909 17.5473 0.16353 17.4419 0.0580959C17.3365 -0.0473378 17.1891 -0.125 17.0312 -0.125V0.125C17.1078 0.125 17.1948 0.164525 17.2651 0.234873C17.3355 0.30522 17.375 0.392216 17.375 0.46875H17.625ZM17.0312 -0.125H16.7188V0.125H17.0312V-0.125ZM16.7188 -0.125C16.3696 -0.125 16.125 0.172167 16.125 0.46875H16.375C16.375 0.296583 16.521 0.125 16.7188 0.125V-0.125ZM16.125 0.46875V14.5312H16.375V0.46875H16.125ZM16.125 14.5312C16.125 14.8737 16.3763 15.125 16.7188 15.125V14.875C16.5143 14.875 16.375 14.7357 16.375 14.5312H16.125ZM16.7188 15.125H17.0312V14.875H16.7188V15.125ZM17.0312 15.125C17.3278 15.125 17.625 14.8804 17.625 14.5312H17.375C17.375 14.729 17.2034 14.875 17.0312 14.875V15.125ZM17.625 14.5312V0.46875H17.375V14.5312H17.625Z" />
        </svg>
      );
    case "hide":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.625"
            y="0.625"
            width="16.75"
            height="16.75"
            strokeWidth="1.25"
          />
          <line y1="5.375" x2="18" y2="5.375" strokeWidth="1.25" />
        </svg>
      );
    case "setting":
      return (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.8281 12.2188L17.5781 11.4766C17.6172 11.1641 17.6172 10.8516 17.6172 10.5C17.6172 10.1875 17.6172 9.875 17.5781 9.5625L18.8281 8.82031C19.2188 8.625 19.375 8.15625 19.2578 7.76562C18.8281 6.28125 18.0469 4.95312 17.0312 3.85938C16.7188 3.54688 16.25 3.46875 15.8594 3.70312L14.6094 4.44531C14.1016 4.05469 13.5547 3.74219 12.9297 3.46875V2.02344C12.9297 1.55469 12.6562 1.20312 12.2266 1.08594C10.7422 0.734375 9.21875 0.734375 7.73438 1.08594C7.30469 1.20312 7.03125 1.55469 7.03125 2.02344V3.46875C6.40625 3.74219 5.85938 4.05469 5.35156 4.44531L4.10156 3.70312C3.71094 3.46875 3.24219 3.54688 2.92969 3.85938C1.91406 4.95312 1.13281 6.28125 0.703125 7.76562C0.585938 8.15625 0.742188 8.625 1.13281 8.82031L2.38281 9.5625C2.34375 9.875 2.34375 10.1875 2.34375 10.5391C2.34375 10.8516 2.34375 11.1641 2.38281 11.4766L1.13281 12.2188C0.742188 12.4141 0.585938 12.8828 0.703125 13.2734C1.13281 14.7578 1.91406 16.0859 2.92969 17.1797C3.24219 17.4922 3.71094 17.5703 4.10156 17.3359L5.35156 16.5938C5.85938 16.9844 6.40625 17.2969 7.03125 17.5703V19.0156C7.03125 19.4844 7.30469 19.8359 7.73438 19.9531C9.21875 20.3047 10.7422 20.3047 12.2266 19.9531C12.6562 19.8359 12.9297 19.4844 12.9297 19.0156V17.5703C13.5547 17.2969 14.1016 16.9844 14.6094 16.5938L15.8594 17.3359C16.25 17.5703 16.7188 17.4922 17.0312 17.1797C18.0469 16.0859 18.8281 14.7578 19.2578 13.2734C19.375 12.8828 19.2188 12.4141 18.8281 12.2188ZM16.2891 16.125L14.4531 15.0703C13.3984 16.0078 13.0469 16.2031 11.6797 16.7109V18.7812C11.1328 18.8984 10.5469 18.9766 9.96094 18.9766C9.375 18.9766 8.82812 18.8984 8.28125 18.7812V16.7109C6.95312 16.2422 6.5625 16.0078 5.50781 15.0703L3.67188 16.125C2.92969 15.2656 2.34375 14.25 1.95312 13.1562L3.78906 12.1406C3.51562 10.7344 3.51562 10.3047 3.78906 8.89844L1.95312 7.88281C2.34375 6.78906 2.92969 5.77344 3.67188 4.91406L5.50781 5.96875C6.5625 5.03125 6.95312 4.79688 8.28125 4.32812V2.25781C8.82812 2.14062 9.41406 2.0625 10 2.0625C10.5859 2.0625 11.1328 2.14062 11.6797 2.25781V4.32812C13.0078 4.79688 13.3984 5.03125 14.4531 5.96875L16.2891 4.91406C17.0312 5.77344 17.6172 6.78906 18.0078 7.88281L16.1719 8.89844C16.4453 10.3047 16.4453 10.7344 16.1719 12.1406L18.0078 13.1562C17.6172 14.25 17.0312 15.2656 16.2891 16.125ZM10 6.75C7.92969 6.75 6.25 8.46875 6.25 10.5C6.25 12.5703 7.92969 14.25 10 14.25C12.0312 14.25 13.75 12.5703 13.75 10.5C13.75 8.46875 12.0312 6.75 10 6.75ZM10 13C8.59375 13 7.5 11.9062 7.5 10.5C7.5 9.13281 8.59375 8 10 8C11.3672 8 12.5 9.13281 12.5 10.5C12.5 11.9062 11.3672 13 10 13Z" />
        </svg>
      );
    case "star":
      return (
        <svg
          width="23"
          height="21"
          viewBox="0 0 23 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.3672 1.20312L7.82812 6.39844L2.08594 7.21875C1.07031 7.375 0.679688 8.625 1.42188 9.36719L5.52344 13.3906L4.54688 19.0547C4.39062 20.0703 5.48438 20.8516 6.38281 20.3828L11.5 17.6875L16.5781 20.3828C17.4766 20.8516 18.5703 20.0703 18.4141 19.0547L17.4375 13.3906L21.5391 9.36719C22.2812 8.625 21.8906 7.375 20.875 7.21875L15.1719 6.39844L12.5938 1.20312C12.1641 0.304688 10.8359 0.265625 10.3672 1.20312Z" />
        </svg>
      );
    case "arrow":
      return (
        <svg
          id="right-arrow-foward-sign"
          version="1.1"
          viewBox="0 0 15.698 8.706"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 " />
        </svg>
      );
  }
};

const SvgSelector = ({ name, cn, onClick }) => {
  return (
    <div className={cn} onClick={onClick}>
      <Svg name={name} />
    </div>
  );
};

export default SvgSelector;
