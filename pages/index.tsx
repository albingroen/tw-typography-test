export default function Home() {
  return (
    <div className="overflow-y-auto">
      <div className="min-h-screen px-8 py-12 mx-auto bg-white dark:bg-[#22272E] prose dark:prose-light max-w-screen-md">
        <h1>Typography.js</h1>
        <blockquote>
          A powerful toolkit for building websites with beautiful design.
        </blockquote>
        <h2>Install</h2>
        <code>npm install typography</code>
        <h2>Why</h2>
        <p>
          Typography is a complex system of interrelated styles. 100s of style
          declarations on dozens of elements must be in harmonious order. Trying
          one design change can mean making dozens of tedious recalculations and
          CSS value changes. Creating new Typography themes with CSS feels hard.
        </p>
        <p>
          Typography.js provides a vastly simpler way to define and explore
          typography designs. You provide configuration to the Typography.js JS
          api and it uses its Typography engine to generate CSS for block and
          inline elements.
        </p>
        <p>
          Typography.js makes it easy to create designs that are unique,
          personal, and custom to your project.
        </p>

        <h3>Testing</h3>
        <p>Hello world</p>

        <h2>Themes & Plugins</h2>
        <ul>
          <li>
            <strong>themes</strong>: Typography.js themes are simple Javascript
            objects. As such they’re easy to share across projects or even open
            source and share via NPM.
          </li>

          <li>
            <strong>plugins</strong>: Plugins are functions that extend or
            modify the core Typography engine. They can change how headers are
            styled or add specialized styles e.g. for code or tables.
          </li>
        </ul>

        <h2>Sites that use Typography.js</h2>
        <ul>
          <li>
            <a href="">bricolage.io (source)</a>
          </li>
          <li>
            <a href="">React Headroom (source)</a>
          </li>
          <li>
            <a href="">Gatsby Blog Starter (source)</a>
          </li>
          <li>
            <a href="">ollieglass.com</a>
          </li>
          <li>
            <a href="">Edit this file to add yours!</a>
          </li>
        </ul>

        <h2>Javascript usage</h2>

        <pre>{`import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Georgia', 'serif'],
  // See below for the full list of options.
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()`}</pre>
      </div>
    </div>
  );
}
