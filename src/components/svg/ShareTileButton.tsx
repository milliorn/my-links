import { h } from "preact";

// ShareTileButton SVG
export default function ShareTileButton(): h.JSX.Element {
  return <svg
    width="16"
    height="16"
    viewBox="0 0 21 21"
    enable-background="new 0 0 24 24"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.75 1.62476C15.3003 1.62476 14.125 2.80001 14.125 4.24976C14.125 5.6995 15.3003 6.87476 16.75 6.87476C18.1997 6.87476 19.375 5.6995 19.375 4.24976C19.375 2.80001 18.1997 1.62476 16.75 1.62476ZM13.125 4.24976C13.125 2.24772 14.748 0.624756 16.75 0.624756C18.752 0.624756 20.375 2.24772 20.375 4.24976C20.375 6.25179 18.752 7.87476 16.75 7.87476C15.5101 7.87476 14.4156 7.25227 13.762 6.30278L7.6858 9.34087C7.8085 9.70475 7.875 10.0945 7.875 10.4998C7.875 10.905 7.8085 11.2948 7.6858 11.6586L13.762 14.6967C14.4156 13.7472 15.5101 13.1248 16.75 13.1248C18.752 13.1248 20.375 14.7477 20.375 16.7498C20.375 18.7518 18.752 20.3748 16.75 20.3748C14.748 20.3748 13.125 18.7518 13.125 16.7498C13.125 16.3445 13.1915 15.9548 13.3142 15.5909L7.23801 12.5528C6.58437 13.5023 5.48988 14.1248 4.25 14.1248C2.24797 14.1248 0.625 12.5018 0.625 10.4998C0.625 8.49772 2.24797 6.87476 4.25 6.87476C5.48988 6.87476 6.58437 7.49724 7.23801 8.44674L13.3142 5.40864C13.1915 5.04476 13.125 4.65502 13.125 4.24976ZM4.25 7.87476C2.80025 7.87476 1.625 9.05001 1.625 10.4998C1.625 11.9495 2.80025 13.1248 4.25 13.1248C5.69975 13.1248 6.875 11.9495 6.875 10.4998C6.875 9.05001 5.69975 7.87476 4.25 7.87476ZM14.125 16.7498C14.125 15.3 15.3003 14.1248 16.75 14.1248C18.1997 14.1248 19.375 15.3 19.375 16.7498C19.375 18.1995 18.1997 19.3748 16.75 19.3748C15.3003 19.3748 14.125 18.1995 14.125 16.7498Z"
      fill="currentColor" />
  </svg>;
}
