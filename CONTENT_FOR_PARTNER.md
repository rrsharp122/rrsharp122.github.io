# Website Content Updates - Priority Items

## 1. Contact Page Content
**File to update:** `content/Contact.md`

Add this content after the existing front matter (after the `---` line):

```markdown
## Let's Connect

Whether you're interested in collaborative research, science communication projects, or just want to chat about neuroscience and genomics, I'd love to hear from you.

### Research Collaborations
I'm always open to discussing potential collaborations in computational genomics, particularly around:
- Social and environmental genomics
- Bipolar disorder genetics
- Statistical methods for large-scale genetic datasets
- Cross-disciplinary approaches to mental health research

### Science Communication
If you're working on science outreach, educational content, or public engagement initiatives, let's talk! I'm passionate about making complex research accessible and engaging for diverse audiences.

### Speaking & Workshops
I'm available for:
- Guest lectures on computational genomics
- Science communication workshops
- Research methodology seminars
- Career panels for aspiring scientists

### General Inquiries
Have questions about graduate school, research, or career paths in computational biology? Feel free to reach out—I'm happy to share my experiences and insights.

**Response Time:** I typically respond to emails within 48 hours during weekdays.

**Preferred Contact:** For research-related inquiries, please use the form below or email directly. For quick questions, LinkedIn messages work great too.
```

## 2. About Me Page Enhancement
**File to update:** `content/About Me.md`

Replace the existing content (keep the front matter) with:

```markdown
## Welcome!

🌴 My name is Rachel Sharp (she/her), and I am a PhD candidate in Neuroscience & Computational Genomics at the University of North Carolina at Chapel Hill.

### My Research Journey

🧠 Currently, I study how social and environmental factors impact the genetic risk for bipolar disorder using computational genomics approaches and large-scale genetic datasets. This work sits at the fascinating intersection of genetics, psychology, and data science—allowing me to explore how our environments interact with our biology to influence mental health outcomes.

🎓 I graduated Summa Cum Laude from the University of Oklahoma in 2019, with a B.S. in Psychology and a minor in Criminology. My undergraduate years were formative in shaping my understanding of human behavior and the complex factors that influence psychological well-being.

🧪 During my undergraduate studies, I conducted research on the neural mechanisms of decision-making and reward processing in addiction. This early research experience taught me the importance of rigorous methodology and sparked my interest in how biological systems underlie complex behaviors.

### Research Philosophy

My approach to science is deeply collaborative and community-focused. I believe that the most impactful research happens when we bring together diverse perspectives and expertise. Whether I'm analyzing genomic data or designing experiments, I'm always thinking about how our findings can translate into real-world applications that benefit communities.

I'm particularly drawn to computational approaches because they allow us to find patterns in vast datasets that would be impossible to detect otherwise. There's something magical about writing code that reveals new insights about human biology and behavior.

### Beyond the Lab

✨ I'm passionate about communicating science in fun and engaging ways. I believe that science is for our communities, and I want to work to bring our communities closer to the science that we do for them. When I'm not analyzing data or reading papers, you might find me developing new ways to explain complex genomics concepts or working on science outreach projects.

I'm also deeply committed to making academia more inclusive and accessible. Having navigated graduate school myself, I understand the challenges that students face, particularly those from underrepresented backgrounds. I try to mentor and support other students whenever possible.

### Personal Interests

When I step away from research, I love exploring new music (always open to recommendations!), trying new restaurants, and spending time outdoors. I find that these activities help me return to my research with fresh perspectives and renewed creativity.

### Looking Forward

As I work toward completing my PhD, I'm excited about the possibilities ahead. Whether in academia, industry, or science communication, I want to continue working at the intersection of genetics, mental health, and public engagement. The questions we're asking in genomics today will shape how we understand and treat mental health conditions tomorrow.

## Contact & Connect

Feel free to reach out if you're interested in collaborating or just want to chat about science, music, or anything in between!

📧 Email: rsharp@unc.edu  
🔗 LinkedIn: [Rachel Sharp](https://www.linkedin.com/in/rachel-sharp-a07b69272)
```

## 3. Formspree Setup Instructions

**For your partner to handle:**

### Quick Setup Steps:

1. **Go to Formspree.io** and create a free account
2. **Create a new form** - they'll give you a unique form ID (looks like `abc123def`)
3. **Update the contact form code:**
   - Open file: `layouts/_default/contact.html`
   - Find line 22 with `YOUR_FORM_ID`
   - Replace it with the actual form ID from Formspree
   - Example: Change `https://formspree.io/f/YOUR_FORM_ID` to `https://formspree.io/f/abc123def`

4. **Test the form** by submitting a test message through the website
5. **Set up email notifications** in your Formspree dashboard so you get notified of new submissions

**Cost:** Free plan allows 50 submissions/month, which should be plenty for a personal academic website.

**Security Note:** Formspree handles spam filtering automatically, so you don't need to worry about that.

## 4. Images for BrainPost Articles

**For Rachel to handle:**

The BrainPost articles need unique thumbnail images. Please add the following images to `/static/images/`:

1. **For "Firing in Rhythm" article**: Add an image showing brain waves or neural synchronization
2. **For "Orbitofrontal Cortex" article**: Add a brain region diagram or learning-related image
3. **For "Robot Psychology" article**: Add a human-robot interaction image
4. **For "Learning Strategies" article**: Keep using writing-header.jpg (already set)
5. **For "Serotonin Code" article**: Keep using neurons.jpg (already set)
6. **For "Neural Economics" article**: Keep using DNA.webp (already set)

**Image specifications:**
- Recommended size: 600x400px or similar aspect ratio
- Format: JPG, PNG, or WebP
- File size: Under 500KB for web performance

Once you add these images, update the image paths in `/content/Science Communication.md` to point to your new files.