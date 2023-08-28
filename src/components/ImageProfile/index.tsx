import { FC } from 'react';

import styles from './ImageProfile.module.css';
import { ImageProfileProps } from './types';

export const ImageProfile: FC<ImageProfileProps> = ({
  color = 'var(--primary)',
}) => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.image}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        viewBox="0 0 565 870"
      >
        <circle cx="290" cy="458" r="275" fill={color} />
        <mask
          id="a"
          width="550"
          height="550"
          x="15"
          y="183"
          maskUnits="userSpaceOnUse"
          // eslint-disable-next-line react/no-unknown-property
          mask-type="alpha"
        >
          <circle cx="290" cy="458" r="275" fill={color} />
        </mask>
        <g mask="url(#a)">
          <path fill="url(#b)" d="M590 158H-10v600h600V158Z" />
        </g>
        <path
          fill="#141414"
          d="M59.8471 97.216h-15.552V124h-28.512V23.2h46.08c9.12 0 17.04 1.536 23.76 4.608 6.72 2.976 11.904 7.296 15.5519 12.96 3.648 5.568 5.472 12.144 5.472 19.728 0 7.296-1.728 13.68-5.184 19.152-3.3599 5.376-8.2079 9.6-14.5439 12.672L108.663 124H78.1351l-18.288-26.784Zm18-36.72c0-4.704-1.488-8.352-4.464-10.944-2.976-2.592-7.392-3.888-13.248-3.888h-15.84v29.52h15.84c5.856 0 10.272-1.248 13.248-3.744 2.976-2.592 4.464-6.24 4.464-10.944Zm2.1673 188.92h-42.624L29.4704 269H.382437L44.8784 168.2h28.08L117.598 269H87.9344l-7.92-19.584Zm-8.352-21.024-12.96-32.256-12.96 32.256h25.92Zm-20.2657 106.84v22.176h44.496v22.032h-44.496V414h-28.512V313.2h79.0563v22.032H51.3967Zm28.6177 204.184h-42.624L29.4704 559H.382437L44.8784 458.2h28.08L117.598 559H87.9344l-7.92-19.584Zm-8.352-21.024-12.96-32.256-12.96 32.256h25.92Zm29.9706 163.576V704H20.705V603.2h79.056v22.032H48.929v16.992h44.784v21.312H48.929v18.432h52.704ZM25.1347 748.2h28.512v78.192h48.0963V849H25.1347V748.2Z"
        />
        <path
          fill={color}
          d="m59.8471 97.216.8259-.5639-.2978-.4361h-.5281v1Zm-15.552 0v-1h-1v1h1Zm0 26.784v1h1v-1h-1Zm-28.512 0h-1v1h1v-1Zm0-100.8v-1h-1v1h1Zm69.84 4.608-.4158.9095.0109.0048.4049-.9143Zm15.5519 12.96-.841.5415.005.0065.836-.548Zm.288 38.88-.845-.534-.003.004.848.53ZM86.9191 92.32l-.4362-.8998-1.0461.5072.6578.9585.8245-.5659ZM108.663 124v1h1.899l-1.074-1.566-.825.566Zm-30.5279 0-.8258.564.2978.436h.528v-1Zm-33.84-78.336v-1h-1v1h1Zm0 29.52h-1v1h1v-1Zm29.088-3.744.6426.7662.0072-.006.007-.0061-.6568-.7541Zm-13.536 24.776h-15.552v2h15.552v-2Zm-16.552 1V124h2V97.216h-2Zm1 25.784h-28.512v2h28.512v-2Zm-27.512 1V23.2h-2V124h2Zm-1-99.8h46.08v-2h-46.08v2Zm46.08 0c9.0093 0 16.7816 1.5174 23.3443 4.5175l.8315-1.819C79.1616 23.7546 71.0938 22.2 61.8631 22.2v2Zm23.3551 4.5223c6.5584 2.9045 11.5835 7.1022 15.1158 12.5872l1.682-1.083c-3.7635-5.843-9.1063-10.2853-15.9879-13.3329l-.8099 1.8287ZM100.339 41.316c3.527 5.3833 5.308 11.7628 5.308 19.18h2c0-7.7508-1.866-14.5233-5.635-20.276l-1.673 1.096Zm5.308 19.18c0 7.1317-1.687 13.3255-5.029 18.618l1.691 1.068c3.569-5.6515 5.338-12.2257 5.338-19.686h-2Zm-5.032 18.622c-3.2493 5.1991-7.9461 9.3029-14.1321 12.3022l.8725 1.7996c6.486-3.1447 11.4852-7.489 14.9556-13.0418l-1.696-1.06ZM86.0946 92.8859l21.7444 31.6801 1.649-1.132-21.7444-31.6799-1.649 1.1318ZM108.663 123H78.1351v2h30.5279v-2Zm-29.702.436L60.673 96.6521l-1.6517 1.1278 18.288 26.7841 1.6517-1.128Zm-.1139-62.94c0-4.9323-1.5711-8.8795-4.8072-11.6981l-1.3136 1.5082c2.7159 2.3654 4.1208 5.7142 4.1208 10.1899h2Zm-4.8072-11.6981c-3.2286-2.812-7.921-4.1339-13.9048-4.1339v2c5.7282 0 9.8678 1.2701 12.5912 3.6421l1.3136-1.5082ZM60.1351 44.664h-15.84v2h15.84v-2Zm-16.84 1v29.52h2v-29.52h-2Zm1 30.52h15.84v-2h-15.84v2Zm15.84 0c5.9763 0 10.6628-1.2706 13.8906-3.9778l-1.2852-1.5324c-2.7241 2.2848-6.8696 3.5102-12.6054 3.5102v2Zm13.9048-3.9899c3.2361-2.8186 4.8072-6.7658 4.8072-11.6981h-2c0 4.4757-1.4049 7.8245-4.1208 10.1899l1.3136 1.5082Zm5.9745 177.2219.9271-.375-.2528-.625h-.6743v1Zm-42.624 0v-1h-.6742l-.2528.625.927.375ZM29.4704 269v1h.6743l.2528-.625-.9271-.375ZM.382437 269l-.914832-.404L-1.15209 270H.382437v-1ZM44.8784 168.2v-1h-.6516l-.2632.596.9148.404Zm28.08 0 .9144-.405-.2635-.595h-.6509v1ZM117.598 269v1h1.537l-.622-1.405-.915.405Zm-29.6636 0-.927.375.2528.625h.6742v-1Zm-16.272-40.608v1h1.4795l-.5516-1.373-.9279.373Zm-12.96-32.256.9279-.373-.9279-2.309-.9279 2.309.9279.373Zm-12.96 32.256-.9279-.373-.5515 1.373h1.4794v-1Zm34.272 20.024h-42.624v2h42.624v-2Zm-43.551.625-7.92 19.584 1.8541.75 7.92-19.584-1.8541-.75ZM29.4704 268H.382437v2H29.4704v-2Zm-28.17313 1.404 44.49603-100.8-1.8297-.808-44.495995 100.8 1.829665.808ZM44.8784 169.2h28.08v-2h-28.08v2Zm27.1657-.595 44.6399 100.8 1.829-.81-44.6402-100.8-1.8287.81ZM117.598 268H87.9344v2h29.6636v-2Zm-28.7365.625-7.92-19.584-1.8541.75 7.92 19.584 1.8541-.75Zm-16.2712-40.606-12.96-32.256-1.8558.746 12.96 32.256 1.8558-.746Zm-14.8158-32.256-12.96 32.256 1.8558.746 12.96-32.256-1.8558-.746Zm-12.0321 33.629h25.92v-2h-25.92v2Zm5.6543 105.84v-1h-1v1h1Zm0 22.176h-1v1h1v-1Zm44.496 0h1v-1h-1v1Zm0 22.032v1h1v-1h-1Zm-44.496 0v-1h-1v1h1Zm0 34.56v1h1v-1h-1Zm-28.512 0h-1v1h1v-1Zm0-100.8v-1h-1v1h1Zm79.0563 0h1v-1h-1v1Zm0 22.032v1h1v-1h-1Zm-51.5443 0v22.176h2v-22.176h-2Zm1 23.176h44.496v-2h-44.496v2Zm43.496-1v22.032h2v-22.032h-2Zm1 21.032h-44.496v2h44.496v-2Zm-45.496 1V414h2v-34.56h-2Zm1 33.56h-28.512v2h28.512v-2Zm-27.512 1V313.2h-2V414h2Zm-1-99.8h79.0563v-2H22.8847v2Zm78.0563-1v22.032h2V313.2h-2Zm1 21.032H51.3967v2h50.5443v-2ZM80.0144 539.416l.9271-.375-.2528-.625h-.6743v1Zm-42.624 0v-1h-.6742l-.2528.625.927.375ZM29.4704 559v1h.6743l.2528-.625-.9271-.375ZM.382437 559l-.914832-.404L-1.15209 560H.382437v-1ZM44.8784 458.2v-1h-.6516l-.2632.596.9148.404Zm28.08 0 .9144-.405-.2635-.595h-.6509v1ZM117.598 559v1h1.537l-.622-1.405-.915.405Zm-29.6636 0-.927.375.2528.625h.6742v-1Zm-16.272-40.608v1h1.4795l-.5516-1.373-.9279.373Zm-12.96-32.256.9279-.373-.9279-2.309-.9279 2.309.9279.373Zm-12.96 32.256-.9279-.373-.5515 1.373h1.4794v-1Zm34.272 20.024h-42.624v2h42.624v-2Zm-43.551.625-7.92 19.584 1.8541.75 7.92-19.584-1.8541-.75ZM29.4704 558H.382437v2H29.4704v-2Zm-28.17313 1.404 44.49603-100.8-1.8297-.808-44.495995 100.8 1.829665.808ZM44.8784 459.2h28.08v-2h-28.08v2Zm27.1657-.595 44.6399 100.8 1.829-.81-44.6402-100.8-1.8287.81ZM117.598 558H87.9344v2h29.6636v-2Zm-28.7365.625-7.92-19.584-1.8541.75 7.92 19.584 1.8541-.75Zm-16.2712-40.606-12.96-32.256-1.8558.746 12.96 32.256 1.8558-.746Zm-14.8158-32.256-12.96 32.256 1.8558.746 12.96-32.256-1.8558-.746Zm-12.0321 33.629h25.92v-2h-25.92v2Zm55.8906 162.576h1v-1h-1v1Zm0 22.032v1h1v-1h-1Zm-80.928 0h-1v1h1v-1Zm0-100.8v-1h-1v1h1Zm79.056 0h1v-1h-1v1Zm0 22.032v1h1v-1h-1Zm-50.832 0v-1h-1v1h1Zm0 16.992h-1v1h1v-1Zm44.784 0h1v-1h-1v1Zm0 21.312v1h1v-1h-1Zm-44.784 0v-1h-1v1h1Zm0 18.432h-1v1h1v-1Zm51.704 0V704h2v-22.032h-2Zm1 21.032H20.705v2h80.928v-2Zm-79.928 1V603.2h-2V704h2Zm-1-99.8h79.056v-2H20.705v2Zm78.056-1v22.032h2V603.2h-2Zm1 21.032H48.929v2h50.832v-2Zm-51.832 1v16.992h2v-16.992h-2Zm1 17.992h44.784v-2H48.929v2Zm43.784-1v21.312h2v-21.312h-2Zm1 20.312H48.929v2h44.784v-2Zm-45.784 1v18.432h2v-18.432h-2Zm1 19.432h52.704v-2H48.929v2ZM25.1347 748.2v-1h-1v1h1Zm28.512 0h1v-1h-1v1Zm0 78.192h-1v1h1v-1Zm48.0963 0h1v-1h-1v1Zm0 22.608v1h1v-1h-1Zm-76.6083 0h-1v1h1v-1Zm0-99.8h28.512v-2h-28.512v2Zm27.512-1v78.192h2V748.2h-2Zm1 79.192h48.0963v-2H53.6467v2Zm47.0963-1V849h2v-22.608h-2Zm1 21.608H25.1347v2h76.6083v-2Zm-75.6083 1V748.2h-2V849h2Z"
        />
        <defs>
          <pattern
            id="b"
            width="1"
            height="1"
            patternContentUnits="objectBoundingBox"
          >
            <use xlinkHref="#c" transform="scale(.00217)" />
          </pattern>
          <image
            xlinkHref="/img/profileImage.webp"
            id="c"
            width="460"
            height="460"
            data-name="rafa.png"
          />
        </defs>
      </svg>
    </div>
  );
};
