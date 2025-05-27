

const Imprint = () => {
  return (
    <article className="flex flex-col gap-6 max-w-[70vw] mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Site Notice (Imprint)</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Website Owner</h2>
        <p>Myami Coding Solutions</p>
        <p>123 Developer Lane</p>
        <p>Code City, 56789</p>
        <p>Country</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: <a href="mailto:contact@myamicoding.com" className="text-blue-600 underline">contact@myamicoding.com</a></p>
        <p>Phone: +1 (555) 123-4567</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Legal Information</h2>
        <p>Registered Company Number: 123456789</p>
        <p>VAT ID: DE123456789</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Responsible for content</h2>
        <p>Myami Coder</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Disclaimer</h2>
        <p>
          The information on this website is provided "as is" without any guarantees of completeness, accuracy, or timeliness.
          Use of the content is at your own risk.
        </p>
      </section>
    </article>
  );
};

export default Imprint;

