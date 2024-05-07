import { html, Component } from "htm/preact";

class Marquee extends Component {
  render(props) {
    // Estimate the total width based on the content, this helps in adjusting the speed dynamically
    const totalWidth =
      props.message.reduce((sum, msg) => sum + msg.length, 0) * 10; // 10 is an assumed average pixel width per character

    const marqueeStyle = {
      whiteSpace: "nowrap",
      display: "inline-block",
      overflow: "hidden",
      animation: `scroll ${totalWidth / 50 + props.speed}s linear infinite`, // Dynamic speed calculation
      width: "auto", // Adjust width automatically
    };

    return html`
      <div
        class="marquee "
        style="position: relative; overflow: hidden; width: 100%; display: flex; background-color: black; padding: 20px 0; font-size: 5xl;"
      >
        <div class="py-20 " style=${marqueeStyle}>
          ${props.message?.map(
            (msg) =>
              html`<span
                class="marquee-content text-5xl "
                style="padding-right: 100px; white-space: nowrap; display: inline-block;"
              >
                ${msg}
              </span>`
          )}
        </div>
      </div>
      <style>
        @keyframes scroll {
          from {
            transform: translateX(100vw);
          }
          to {
            transform: translateX(-100vw);
          }
        }
      </style>
    `;
  }
}

export default function App(props) {
  return html` <${Marquee} ...${props} /> `;
}
