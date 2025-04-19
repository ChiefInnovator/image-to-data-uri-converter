// Schema markup for all pages
function addSchemaMarkup() {
  // Get the current page URL
  const currentUrl = window.location.href;
  const pageName = window.location.pathname.split('/').pop() || 'index.html';
  const baseUrl = window.location.origin;
  
  // Common organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DataURI.ai",
    "url": baseUrl,
    "logo": `${baseUrl}/icon-192.png`,
    "sameAs": [
      "https://twitter.com/richcrane",
      "https://github.com/richcrane",
      "https://www.mill5.com"
    ],
    "founder": {
      "@type": "Person",
      "name": "Richard Crane",
      "jobTitle": "Founder/CTO of MILL5",
      "url": `${baseUrl}/about.html`
    }
  };
  
  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DataURI.ai",
    "url": baseUrl,
    "description": "Free online tool to convert images to Data URLs (base64) for embedding in HTML, CSS, and JavaScript.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/index.html?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
  
  // Page-specific schema
  let pageSchema = {};
  
  // Determine which page we're on and set appropriate schema
  if (pageName === 'index.html' || pageName === '') {
    // Home page / Tool page schema
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Image to Data URL Converter",
      "url": `${baseUrl}/index.html`,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Free online tool to convert images to Data URLs (base64) for embedding in HTML, CSS, and JavaScript. Supports PNG, JPEG, GIF, SVG, and more.",
      "author": {
        "@type": "Person",
        "name": "Richard Crane",
        "url": `${baseUrl}/about.html`
      }
    };
  } else if (pageName === 'about-data-urls.html') {
    // About Data URLs page schema
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "About Data URLs - Understanding Data URIs in Web Development",
      "description": "Learn what Data URLs are, how they work, and their benefits and limitations in web development. Comprehensive guide to understanding and using Data URIs.",
      "image": `${baseUrl}/icon-192.png`,
      "author": {
        "@type": "Person",
        "name": "Richard Crane",
        "url": `${baseUrl}/about.html`
      },
      "publisher": {
        "@type": "Organization",
        "name": "DataURI.ai",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/icon-192.png`
        }
      },
      "datePublished": "2023-01-15",
      "dateModified": new Date().toISOString().split('T')[0],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseUrl}/about-data-urls.html`
      }
    };
  } else if (pageName === 'tutorials.html') {
    // Tutorials page schema
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Data URL Tutorials - Learn How to Use Data URLs in Web Development",
      "description": "Step-by-step tutorials for working with Data URLs in web development. Learn how to implement Data URLs in HTML, CSS, and JavaScript with practical examples.",
      "image": `${baseUrl}/icon-192.png`,
      "totalTime": "PT55M",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Converting Images to Data URLs",
          "text": "Learn how to convert images to Data URLs for embedding directly in your HTML, CSS, or JavaScript code.",
          "url": `${baseUrl}/tutorials.html#converting-images`,
          "image": `${baseUrl}/icon-192.png`
        },
        {
          "@type": "HowToStep",
          "name": "Optimizing SVG Icons with Data URLs",
          "text": "Learn how to optimize SVG icons by converting them to Data URLs for efficient use in web projects.",
          "url": `${baseUrl}/tutorials.html#optimizing-svg-icons`,
          "image": `${baseUrl}/icon-192.png`
        },
        {
          "@type": "HowToStep",
          "name": "Using Data URLs for Web Fonts",
          "text": "Learn how to embed web fonts using Data URLs for faster loading and reduced HTTP requests.",
          "url": `${baseUrl}/tutorials.html#web-fonts`,
          "image": `${baseUrl}/icon-192.png`
        }
      ],
      "author": {
        "@type": "Person",
        "name": "Richard Crane",
        "url": `${baseUrl}/about.html`
      },
      "publisher": {
        "@type": "Organization",
        "name": "DataURI.ai",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/icon-192.png`
        }
      }
    };
  } else if (pageName === 'use-cases.html') {
    // Use Cases page schema
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Data URL Use Cases - Practical Applications for Web Development",
      "description": "Explore practical use cases for Data URLs in web development. Learn when and how to use Data URLs effectively for images, SVGs, fonts, and more.",
      "image": `${baseUrl}/icon-192.png`,
      "author": {
        "@type": "Person",
        "name": "Richard Crane",
        "url": `${baseUrl}/about.html`
      },
      "publisher": {
        "@type": "Organization",
        "name": "DataURI.ai",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/icon-192.png`
        }
      },
      "datePublished": "2023-01-20",
      "dateModified": new Date().toISOString().split('T')[0],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseUrl}/use-cases.html`
      }
    };
  } else if (pageName === 'best-practices.html') {
    // Best Practices page schema
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Best Practices for Data URLs - Optimization Tips & Guidelines",
      "description": "Learn best practices for using Data URLs in web development. Discover optimization techniques, performance considerations, and when to use Data URLs for maximum efficiency.",
      "image": `${baseUrl}/icon-192.png`,
      "author": {
        "@type": "Person",
        "name": "Richard Crane",
        "url": `${baseUrl}/about.html`
      },
      "publisher": {
        "@type": "Organization",
        "name": "DataURI.ai",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/icon-192.png`
        }
      },
      "datePublished": "2023-01-25",
      "dateModified": new Date().toISOString().split('T')[0],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseUrl}/best-practices.html`
      },
      "proficiencyLevel": "Intermediate"
    };
  } else if (pageName === 'faq.html') {
    // FAQ page schema
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Data URL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Data URL is a URI scheme that allows you to embed small files directly into HTML, CSS, or JavaScript code as a string of text. It eliminates the need for separate HTTP requests for small resources like images, fonts, or other files."
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of using Data URLs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Data URLs reduce HTTP requests, simplify asset management, and can improve loading performance for small resources. They're particularly useful for small images, icons, and simple graphics that are used throughout a website."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any limitations to using Data URLs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Data URLs have several limitations: they increase file size by about 33% due to Base64 encoding, they can't be cached separately from the containing document, they may cause performance issues if used for large files, and they have some browser-specific limitations."
          }
        },
        {
          "@type": "Question",
          "name": "What's the maximum size recommended for Data URLs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, it's recommended to limit Data URLs to resources smaller than 5KB. For larger files, traditional URL references with proper caching are usually more efficient."
          }
        },
        {
          "@type": "Question",
          "name": "How do I convert an image to a Data URL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can use our free online Data URL Converter tool at DataURI.ai. Simply upload your image, and the tool will convert it to a Data URL that you can copy and use in your HTML, CSS, or JavaScript code."
          }
        }
      ]
    };
  } else if (pageName === 'about.html') {
    // About page schema
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About DataURI.ai",
      "description": "Learn about DataURI.ai and its creator, Richard Crane. DataURI.ai provides free tools and resources for working with Data URLs in web development.",
      "author": {
        "@type": "Person",
        "name": "Richard Crane",
        "jobTitle": "Founder/CTO of MILL5",
        "url": `${baseUrl}/about.html`,
        "image": `${baseUrl}/richcrane.jpg`
      },
      "publisher": {
        "@type": "Organization",
        "name": "DataURI.ai",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/icon-192.png`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseUrl}/about.html`
      }
    };
  }
  
  // Add the schema markup to the page
  const schemas = [organizationSchema, websiteSchema, pageSchema];
  
  schemas.forEach(schema => {
    if (Object.keys(schema).length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  });
}

// Execute when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  addSchemaMarkup();
});
