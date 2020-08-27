import React from 'react';
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/core';
import { lighten } from 'polished';

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
import favicon from '../../src/favicon.ico';
import { colors } from '../styles/colors';

interface IndexProps {
  className?: string;
}
/// experiment start
// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}
/// experiment end
const IndexLayout: React.FC<IndexProps> = props => {
  return (
    <div className={props.className}>
      <Helmet>
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Global
        styles={css`
          html,
          body,
          div,
          span,
          applet,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          embed,
          figure,
          figcaption,
          footer,
          header,
          hgroup,
          menu,
          nav,
          output,
          ruby,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            font: inherit;
            font-size: 100%;
            vertical-align: baseline;
          }
          body {
  height: 2000px;
  position: relative;
}

.intro-copy {
  padding: 1em;
  margin: 50vh auto;
  max-width: 15em;
  font-family: Helvetica;
  font-weight: lighter;
  font-size: 2em;
  line-height: 1.2;
  text-align: center;
}

.top-link {
  transition: all .25s ease-in-out;
  position: fixed;
  bottom: 0;
  right: 0;
  display: inline-flex;

	cursor: pointer;
	align-items: center;
	justify-content: center;
	margin: 0 3em 3em 0;
	border-radius: 50%;
	padding: .25em;
	width: 80px;
	height: 80px;
  background-color: #F8F8F8;

  &.show {
    visibility: visible;
    opacity: 1;
  }

  &.hide {
    visibility: hidden;
    opacity: 0;
  }

	svg {
		fill: #000;
		width: 24px;
		height: 12px;
	}

	&:hover {
		background-color: #E8E8E8;

		svg {
			fill: #000000;
		}
	}
}

// Text meant only for screen readers.
.screen-reader-text {
	position: absolute;
	clip-path: inset(50%);
	margin: -1px;
	border: 0;
	padding: 0;
	width: 1px;
	height: 1px;
	overflow: hidden;
	word-wrap: normal !important;
	clip: rect(1px, 1px, 1px, 1px);

	&:focus {
		display: block;
		top: 5px;
		left: 5px;
		z-index: 100000; // Above WP toolbar
		clip-path: none;
		background-color: #eee;
		padding: 15px 23px 14px;
		width: auto;
		height: auto;
		text-decoration: none;
		line-height: normal;
		color: #444;
		font-size: 1em;
		clip: auto !important;
	}
}
          body {
            line-height: 1;
          }
          ol,
          ul {
            list-style: none;
          }
          blockquote,
          q {
            quotes: none;
          }
          blockquote:before,
          blockquote:after,
          q:before,
          q:after {
            content: '';
            content: none;
          }
          table {
            border-spacing: 0;
            border-collapse: collapse;
          }
          img {
            max-width: 100%;
          }
          html {
            box-sizing: border-box;
            font-family: sans-serif;

            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          a {
            background-color: transparent;
          }
          a:active,
          a:hover {
            outline: 0;
          }
          b,
          strong {
            font-weight: bold;
          }
          i,
          em,
          dfn {
            font-style: italic;
          }
          h1 {
            margin: 0.67em 0;
            font-size: 2em;
          }
          small {
            font-size: 80%;
          }
          sub,
          sup {
            position: relative;
            font-size: 75%;
            line-height: 0;
            vertical-align: baseline;
          }
          sup {
            top: -0.5em;
          }
          sub {
            bottom: -0.25em;
          }
          img {
            border: 0;
          }
          svg:not(:root) {
            overflow: hidden;
          }
          mark {
            background-color: #fdffb6;
          }
          code,
          kbd,
          pre,
          samp {
            font-family: monospace, monospace;
            font-size: 1em;
          }
          button,
          input,
          optgroup,
          select,
          textarea {
            margin: 0;
            color: inherit;
            font: inherit;
          }
          button {
            overflow: visible;
            border: none;
          }
          button,
          select {
            text-transform: none;
          }
          button,
          html input[type='button'],
          input[type='reset'],
          input[type='submit'] {
            cursor: pointer;

            -webkit-appearance: button;
          }
          button[disabled],
          html input[disabled] {
            cursor: default;
          }
          button::-moz-focus-inner,
          input::-moz-focus-inner {
            padding: 0;
            border: 0;
          }
          input {
            line-height: normal;
          }
          input:focus {
            outline: none;
          }
          input[type='checkbox'],
          input[type='radio'] {
            box-sizing: border-box;
            padding: 0;
          }
          input[type='number']::-webkit-inner-spin-button,
          input[type='number']::-webkit-outer-spin-button {
            height: auto;
          }
          input[type='search'] {
            box-sizing: content-box;

            -webkit-appearance: textfield;
          }
          input[type='search']::-webkit-search-cancel-button,
          input[type='search']::-webkit-search-decoration {
            -webkit-appearance: none;
          }
          legend {
            padding: 0;
            border: 0;
          }
          textarea {
            overflow: auto;
          }
          table {
            border-spacing: 0;
            border-collapse: collapse;
          }
          td,
          th {
            padding: 0;
          }

          html {
            overflow-x: hidden;
            overflow-y: scroll;
            font-size: 62.5%;

            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          body {
            overflow-x: hidden;
            color: ${lighten('-0.3', colors.midgrey)};
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
              Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 1.6rem;
            line-height: 1.6em;
            font-weight: 400;
            font-style: normal;
            letter-spacing: 0;
            text-rendering: optimizeLegibility;
            background: #fff;

            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -moz-font-feature-settings: 'liga' on;
          }

          ::selection {
            text-shadow: none;
            background: ${lighten('0.3', colors.blue)};
          }

          hr {
            position: relative;
            display: block;
            width: 100%;
            margin: 2.5em 0 3.5em;
            padding: 0;
            height: 1px;
            border: 0;
            border-top: 1px solid ${lighten('0.1', colors.lightgrey)};
          }

          audio,
          canvas,
          iframe,
          img,
          svg,
          video {
            vertical-align: middle;
          }

          fieldset {
            margin: 0;
            padding: 0;
            border: 0;
          }

          textarea {
            resize: vertical;
          }

          p,
          ul,
          ol,
          dl,
          blockquote {
            margin: 0 0 1.5em 0;
          }

          ol,
          ul {
            padding-left: 1.3em;
            padding-right: 1.5em;
          }

          ol ol,
          ul ul,
          ul ol,
          ol ul {
            margin: 0.5em 0 1em;
          }

          ul {
            list-style: disc;
          }

          ol {
            list-style: decimal;
          }

          ul,
          ol {
            max-width: 100%;
          }

          li {
            margin: 0.5em 0;
            padding-left: 0.3em;
            line-height: 1.6em;
          }

          dt {
            float: left;
            margin: 0 20px 0 0;
            width: 120px;
            color: ${colors.darkgrey};
            font-weight: 500;
            text-align: right;
          }

          dd {
            margin: 0 0 5px 0;
            text-align: left;
          }

          blockquote {
            margin: 1.5em 0;
            padding: 0 1.6em 0 1.6em;
            border-left: ${colors.whitegrey} 0.5em solid;
          }

          blockquote p {
            margin: 0.8em 0;
            font-size: 1.2em;
            font-weight: 300;
          }

          blockquote small {
            display: inline-block;
            margin: 0.8em 0 0.8em 1.5em;
            font-size: 0.9em;
            opacity: 0.8;
          }

          blockquote cite {
            font-weight: bold;
          }
          blockquote cite a {
            font-weight: normal;
          }

          a {
            color: ${lighten('-0.05', colors.blue)};
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin-top: 0;
            line-height: 1.15;
            font-weight: 600;
            text-rendering: optimizeLegibility;
          }

          h1 {
            margin: 0 0 0.5em 0;
            font-size: 5.5rem;
            font-weight: 600;
          }
          @media (max-width: 500px) {
            h1 {
              font-size: 2.2rem;
            }
          }

          h2 {
            margin: 1.5em 0 0.5em 0;
            font-size: 2.2rem;
          }
          @media (max-width: 500px) {
            h2 {
              font-size: 1.8rem;
            }
          }

          h3 {
            margin: 1.5em 0 0.5em 0;
            font-size: 1.8rem;
            font-weight: 500;
          }
          @media (max-width: 500px) {
            h3 {
              font-size: 1.7rem;
            }
          }

          h4 {
            margin: 1.5em 0 0.5em 0;
            font-size: 1.6rem;
            font-weight: 500;
          }

          h5 {
            margin: 1.5em 0 0.5em 0;
            font-size: 1.4rem;
            font-weight: 500;
          }

          h6 {
            margin: 1.5em 0 0.5em 0;
            font-size: 1.4rem;
            font-weight: 500;
          }

          /* globals from screen.css */
          body {
            background: #fff;
          }

          @media (prefers-color-scheme: dark) {
            body {
              color: rgba(255, 255, 255, 0.75);
              background: ${colors.darkmode};
            }
            img {
              opacity: 0.9;
            }
          }
        `}
      />
      {props.children}
    </div>
  );
};

export default IndexLayout;
