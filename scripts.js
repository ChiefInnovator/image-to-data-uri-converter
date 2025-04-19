// Add copy functionality to all code blocks
document.addEventListener('DOMContentLoaded', function() {
  // Find all code blocks
  const codeBlocks = document.querySelectorAll('.code-block');
  
  // Add copy button to each code block
  codeBlocks.forEach(function(block) {
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = 'Copy';
    
    // Add button to code block
    block.style.position = 'relative';
    block.appendChild(copyButton);
    
    // Add click event to copy code
    copyButton.addEventListener('click', function() {
      // Get the code content
      const code = block.querySelector('code') || block.querySelector('pre');
      const textToCopy = code.textContent;
      
      // Copy to clipboard
      navigator.clipboard.writeText(textToCopy).then(function() {
        // Success feedback
        copyButton.innerHTML = 'Copied!';
        copyButton.classList.add('copied');
        
        // Reset button after 2 seconds
        setTimeout(function() {
          copyButton.innerHTML = 'Copy';
          copyButton.classList.remove('copied');
        }, 2000);
      }).catch(function(err) {
        // Error feedback
        copyButton.innerHTML = 'Failed!';
        console.error('Could not copy text: ', err);
        
        // Reset button after 2 seconds
        setTimeout(function() {
          copyButton.innerHTML = 'Copy';
        }, 2000);
      });
    });
  });
});
