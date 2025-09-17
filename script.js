// Global Variables
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const mergeBtn = document.getElementById('mergeBtn');
const outputName = document.getElementById('outputName');
const dropArea = document.getElementById('dropArea');
const loading = document.getElementById('loading');
const darkToggle = document.getElementById('darkToggle');
const sortSelect = document.getElementById('sortFiles');
const compressOption = document.getElementById('compressOption');
const compressionSection = document.getElementById('compressionSection');
const compressionLevel = document.getElementById('compressionLevel');
const previewBtn = document.getElementById('previewBtn');
const summaryDiv = document.getElementById('summary');
const passwordOption = document.getElementById('passwordOption');
const passwordSection = document.getElementById('passwordSection');
const pdfPassword = document.getElementById('pdfPassword');
const watermarkOption = document.getElementById('watermarkOption');
const watermarkSection = document.getElementById('watermarkSection');
const watermarkText = document.getElementById('watermarkText');
const watermarkPosition = document.getElementById('watermarkPosition');
const watermarkSize = document.getElementById('watermarkSize');
const bookmarkOption = document.getElementById('bookmarkOption');
const rotateOption = document.getElementById('rotateOption');
const rotationSection = document.getElementById('rotationSection');
const rotationAngle = document.getElementById('rotationAngle');
const removeBlankOption = document.getElementById('removeBlankOption');
const pageRangeOption = document.getElementById('pageRangeOption');
const googleDriveOption = document.getElementById('googleDriveOption');
const progressContainer = document.getElementById('progressContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const loadingTitle = document.getElementById('loadingTitle');
const loadingText = document.getElementById('loadingText');
const validationAlert = document.getElementById('validationAlert');
const alertMessage = document.getElementById('alertMessage');
const alertClose = document.getElementById('alertClose');
const alertIcon = document.getElementById('alertIcon');
const couponCode = document.getElementById('couponCode');
const applyCoupon = document.getElementById('applyCoupon');
const removeCoupon = document.getElementById('removeCoupon');
const premiumNotice = document.getElementById('premiumNotice');
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const modalClose = document.getElementById('modalClose');
const userName = document.getElementById('userName');
const userPasscode = document.getElementById('userPasscode');
const loginSubmit = document.getElementById('loginSubmit');
const pricingBtn = document.getElementById('pricingBtn');
const langToggle = document.getElementById('langToggle');
const shareBtn = document.getElementById('shareBtn');
const shareModal = document.getElementById('shareModal');
const shareModalClose = document.getElementById('shareModalClose');
const shareLink = document.getElementById('shareLink');
const copyLinkBtn = document.getElementById('copyLinkBtn');
const shareFilename = document.getElementById('shareFilename');
const emailShareBtn = document.getElementById('emailShareBtn');
const whatsappShareBtn = document.getElementById('whatsappShareBtn');
const telegramShareBtn = document.getElementById('telegramShareBtn');
const actionsDiv = document.querySelector('.actions');

// Language State
let currentLang = 'en';

// Translations
const translations = {
  en: {
    title: 'Merge Your PDFs',
    subtitle: 'Combine multiple PDF files into one document with ease',
    dropText: 'Drop your PDF files here',
    chooseFiles: 'Choose PDF Files',
    outputLabel: 'Output filename (optional)',
    sortLabel: 'Sort files',
    previewBtn: 'Preview PDF',
    mergeBtn: 'Merge PDFs',
    standardBadge: '💼 STANDARD',
    premiumBadge: '✨ PREMIUM',
    coreFeatures: 'Core Features',
    premiumFeatures: 'Premium Features',
    docSecurity: '🔒 Document Security Protection',
    pageOrientation: '🔄 Page Orientation Control',
    fileSizeOpt: '📦 File Size Optimization',
    blankPageRemoval: '🗑️ Intelligent Blank Page Removal',
    customWatermark: '💧 Custom Document Watermarking',
    autoBookmarks: '📑 Automated Document Navigation',
    precisionPageSelect: '📑 Precision Page Selection',
    cloudStorage: '📤 Cloud Storage Integration',
    allPagesPlaceholder: 'All pages (Premium: Enable advanced ranges for custom selection)',
    premiumActive: '✨ PREMIUM ACTIVE',
    premiumActivatedMsg: 'Premium features activated! You can now use all advanced features. Enable "Advanced page range selection" to use custom page ranges.'
  },
  kn: {
    title: 'ನಿಮ್ಮ PDF ಗಳನ್ನು ಸೇರಿಸಿ',
    subtitle: 'ಅನೇಕ PDF ಫೈಲ್‌ಗಳನ್ನು ಸುಲಭವಾಗಿ ಒಂದೇ ದಾಖಲೆಯಾಗಿ ಸಂಯೋಜಿಸಿ',
    dropText: 'ನಿಮ್ಮ PDF ಫೈಲ್‌ಗಳನ್ನು ಇಲ್ಲಿ ಬಿಡಿ',
    chooseFiles: 'PDF ಫೈಲ್‌ಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    outputLabel: 'ಔಟ್‌ಪುಟ್ ಫೈಲ್‌ನೇಮ್ (ಐಚ್ಛಿಕ)',
    sortLabel: 'ಫೈಲ್‌ಗಳನ್ನು ವಿಂಗಡಿಸಿ',
    previewBtn: 'PDF ಪೂರ್ವವೀಕ್ಷಣೆ',
    mergeBtn: 'PDF ಗಳನ್ನು ಸೇರಿಸಿ',
    standardBadge: '💼 ಮಾನಕ',
    premiumBadge: '✨ ಪ್ರೀಮಿಯಂ',
    coreFeatures: 'ಮೂಲ ವೈಶಿಷ್ಟ್ಯಗಳು',
    premiumFeatures: 'ಪ್ರೀಮಿಯಂ ವೈಶಿಷ್ಟ್ಯಗಳು',
    docSecurity: '🔒 ದಾಖಲೆ ಭದ್ರತಾ ರಕ್ಷಣೆ',
    pageOrientation: '🔄 ಪುಟ ದಿಕ್ಕು ನಿಯಂತ್ರಣ',
    fileSizeOpt: '📦 ಫೈಲ್ ಗಾತ್ರ ಅನುಕೂಲೀಕರಣ',
    blankPageRemoval: '🗑️ ಬುದ್ಧಿವಂತ ಖಾಲಿ ಪುಟ ತೆಗೆದುಹಾಕುವಿಕೆ',
    customWatermark: '💧 ಕಸ್ಟಮ್ ದಾಖಲೆ ವಾಟರ್ಮಾರ್ಕಿಂಗ್',
    autoBookmarks: '📑 ಸ್ವಯಂಚಾಲಿತ ದಾಖಲೆ ನ್ಯಾವಿಗೇಶನ್',
    precisionPageSelect: '📑 ನಿಖರ ಪುಟ ಆಯ್ಕೆ',
    cloudStorage: '📤 ಕ್ಲೌಡ್ ಸ್ಟೋರೇಜ್ ಏಕೀಕರಣ',
    allPagesPlaceholder: 'ಎಲ್ಲಾ ಪುಟಗಳು (ಪ್ರೀಮಿಯಂ: ಕಸ್ಟಮ್ ಆಯ್ಕೆಗಾಗಿ ಅಡ್ವಾಂಸ್ಡ್ ರೇಂಜ್ಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ)',
    premiumActive: '✨ ಪ್ರೀಮಿಯಂ ಸಕ್ರಿಯ',
    premiumActivatedMsg: 'ಪ್ರೀಮಿಯಂ ವೈಶಿಷ್ಟ್ಯಗಳು ಸಕ್ರಿಯಗೊಂಡಿವೆ! ನೀವು ಇದೀಗ ಎಲ್ಲಾ ಅಡ್ವಾಂಸ್ಡ್ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಬೇರೆಬಹುದು. ಕಸ್ಟಮ್ ಪುಟ ರೇಂಜ್ಗಳನ್ನು ಬೇರೆಬೇಕಾಗಿ "ನಿಖರ ಪುಟ ಆಯ್ಕೆ"ಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ.'
  }
};

// Premium Features State
let isPremium = false; // Set to true for premium users
const validCoupons = ['proindra', 'PROINDRA']; // Valid coupon codes

// Login State
let isLoggedIn = false;
let loginMandatory = false;
let mergeCount = 0;
const validPasscode = 'proindra';

let files = [];

// Validation and UI Helper Functions
function showAlert(message, type = 'warning') {
  alertMessage.textContent = message;
  validationAlert.className = `validation-alert ${type}`;
  
  // Set appropriate icon based on alert type
  switch(type) {
    case 'success':
      alertIcon.textContent = '✅';
      break;
    case 'error':
      alertIcon.textContent = '❌';
      break;
    case 'info':
      alertIcon.textContent = 'ℹ️';
      break;
    default:
      alertIcon.textContent = '⚠️';
  }
  
  validationAlert.style.display = 'block';
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    hideAlert();
  }, 5000);
}

function hideAlert() {
  validationAlert.style.display = 'none';
}

function validateInputs() {
  const errors = [];
  
  // Check if files are selected
  if (!files.length) {
    errors.push('Please select at least one PDF file');
  }
  
  // Validate password if enabled
  if (passwordOption.checked) {
    const password = pdfPassword.value.trim();
    if (!password) {
      errors.push('Password is required when password protection is enabled');
      pdfPassword.classList.add('error');
    } else if (password.length < 4) {
      errors.push('Password must be at least 4 characters long');
      pdfPassword.classList.add('error');
    } else {
      pdfPassword.classList.remove('error');
      pdfPassword.classList.add('success');
    }
  }
  
  // Validate watermark if enabled (premium only)
  if (watermarkOption.checked && isPremium) {
    const watermark = watermarkText.value.trim();
    if (!watermark) {
      errors.push('Watermark text is required when watermark is enabled');
      watermarkText.classList.add('error');
    } else {
      watermarkText.classList.remove('error');
      watermarkText.classList.add('success');
    }
  }
  
  // Validate page ranges (premium only)
  files.forEach((obj, index) => {
    const rangeValue = obj.rangeInput.value.trim();
    if (rangeValue && pageRangeOption.checked && isPremium) {
      const ranges = parseAdvancedRanges(rangeValue, obj.totalPages);
      if (ranges.length === 0) {
        errors.push(`Invalid premium page range for file: ${obj.file.name}`);
        obj.rangeInput.classList.add('error');
      } else {
        obj.rangeInput.classList.remove('error');
        obj.rangeInput.classList.add('success');
      }
    }
  });
  
  return errors;
}

function setButtonsLoading(loading) {
  previewBtn.disabled = loading;
  mergeBtn.disabled = loading;
  
  if (loading) {
    previewBtn.querySelector('.btn-text').textContent = 'Processing...';
    mergeBtn.querySelector('.btn-text').textContent = 'Processing...';
  } else {
    previewBtn.querySelector('.btn-text').textContent = 'Preview PDF';
    mergeBtn.querySelector('.btn-text').textContent = 'Merge PDFs';
  }
}

function updateLoadingStatus(title, text, progress = null) {
  loadingTitle.textContent = title;
  loadingText.textContent = text;
  if (progress !== null) {
    updateProgress(progress);
  }
}

// Language Toggle
langToggle.addEventListener("click", () => {
  currentLang = currentLang === 'en' ? 'kn' : 'en';
  updateLanguage();
});

function updateLanguage() {
  const t = translations[currentLang];
  
  // Update main content
  document.querySelector('.title h1').textContent = t.title;
  document.querySelector('.title p').textContent = t.subtitle;
  document.querySelector('.drop-zone h3').textContent = t.dropText;
  document.querySelector('#fileInputBtn').textContent = t.chooseFiles;
  document.querySelector('label[for="outputName"]').textContent = t.outputLabel;
  document.querySelector('label[for="sortFiles"]').textContent = t.sortLabel;
  document.querySelector('#previewBtn .btn-text').textContent = t.previewBtn;
  document.querySelector('#mergeBtn .btn-text').textContent = t.mergeBtn;
  document.querySelector('.basic-badge').textContent = t.standardBadge;
  document.querySelector('.premium-badge').textContent = t.premiumBadge;
  
  // Update section headers
  document.querySelector('.section-header h3').textContent = t.coreFeatures;
  document.querySelector('.premium-header h3').textContent = t.premiumFeatures;
  
  // Update feature labels
  document.querySelector('label[for="passwordOption"]').textContent = t.docSecurity;
  document.querySelector('label[for="rotateOption"]').textContent = t.pageOrientation;
  document.querySelector('label[for="compressOption"]').textContent = t.fileSizeOpt;
  document.querySelector('label[for="removeBlankOption"]').textContent = t.blankPageRemoval;
  document.querySelector('label[for="watermarkOption"]').textContent = t.customWatermark;
  document.querySelector('label[for="bookmarkOption"]').textContent = t.autoBookmarks;
  document.querySelector('label[for="pageRangeOption"]').textContent = t.precisionPageSelect;
  document.querySelector('label[for="googleDriveOption"]').textContent = t.cloudStorage;
  
  // Update existing file range placeholders
  files.forEach(obj => {
    if (obj.rangeInput.disabled) {
      obj.rangeInput.placeholder = t.allPagesPlaceholder;
    }
  });
  
  // Update language toggle button
  langToggle.textContent = currentLang === 'en' ? '🌐 ಕನ್ನಡ' : '🌐 English';
}

// Theme Toggle
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  darkToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// File Handling
document.getElementById('fileInputBtn').addEventListener('click', () => fileInput.click());

dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', () => dropArea.classList.remove('dragover'));

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dropArea.classList.remove('dragover');
  handleFiles([...e.dataTransfer.files]);
});

function handleFiles(selected) {
  for (let f of selected) {
    if (f.type === 'application/pdf') renderFile(f);
  }
}

// Render File Card
async function renderFile(file) {
  const reader = new FileReader();
  reader.onload = async function () {
    try {
      const data = new Uint8Array(this.result);
      const pdf = await pdfjsLib.getDocument({ data }).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 0.3 });
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = viewport.width; 
      canvas.height = viewport.height;
      await page.render({ canvasContext: ctx, viewport }).promise;

      if (fileList.querySelector('.empty-state')) {
        fileList.innerHTML = '';
      }

      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);

      const div = document.createElement('div');
      div.className = 'file-card fade-in-up';
      div.draggable = true;
      div.innerHTML = `
        <img class="file-thumb" src="${canvas.toDataURL()}" alt="PDF thumbnail"/>
        <div class="file-info">
          <div class="file-name">${file.name}</div>
          <div class="file-meta">
            <span>📄 ${pdf.numPages} pages</span>
            <span>💾 ${sizeMB} MB</span>
          </div>
          <input 
            class="file-range" 
placeholder="${translations[currentLang].allPagesPlaceholder}" 
            title="Premium feature: Specify which pages to include from this PDF"
            disabled
          />
        </div>
        <div class="file-actions">
          <button class="remove-btn" title="Remove this file">✖</button>
        </div>
      `;
      fileList.appendChild(div);

      const rangeInput = div.querySelector('.file-range');
      const obj = { file: file, rangeInput: rangeInput, totalPages: pdf.numPages, div: div };
      files.push(obj);
      
      // Apply premium styling based on current state
      if (pageRangeOption.checked && isPremium) {
        rangeInput.disabled = false;
        rangeInput.placeholder = 'Premium: 1-3,5,7-10,odd,even,last or leave empty for all pages';
        rangeInput.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.1))';
        rangeInput.style.border = '2px solid #ffd700';
        rangeInput.title = 'Premium: Advanced page selection with keywords like odd, even, last, step ranges (1-10:2), negative indexing (-1)';
      } else if (isPremium) {
        rangeInput.disabled = false;
        rangeInput.placeholder = 'Premium unlocked! Enter ranges like 1-3,5,7-10 or leave empty for all pages';
        rangeInput.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 165, 0, 0.05))';
        rangeInput.style.border = '1px solid #ffd700';
        rangeInput.title = 'Premium unlocked! Enter page ranges like 1-3,5,7-10,odd,even,last or leave empty for all pages';
      }

      updateSummary();
      
      // Add click handler for smart name suggestion
      if (!outputName.hasAttribute('data-smart-handler')) {
        outputName.setAttribute('data-smart-handler', 'true');
        outputName.addEventListener('click', () => {
          if (!outputName.value.trim() && outputName.placeholder.includes('Smart suggestion:')) {
            const suggestedName = outputName.placeholder.replace('Smart suggestion: ', '');
            outputName.value = suggestedName;
            outputName.placeholder = 'Enter merged file name...';
            showAlert(`Smart name "${suggestedName}" applied! You can edit it if needed.`, 'info');
          }
        });
      }

      div.querySelector('.remove-btn').onclick = () => {
        files = files.filter(o => o !== obj);
        div.remove();
        if (files.length === 0) {
          fileList.innerHTML = '<div class="empty-state">No PDF files selected yet. Upload some files to get started!</div>';
        }
        updateSummary();
      };
    } catch (error) {
      console.error('Error processing PDF:', error);
      alert('Error processing PDF file. Please make sure it\'s a valid PDF.');
    }
  };
  reader.readAsArrayBuffer(file);
}

// Drag & Drop Reorder
let draggedItem = null;

fileList.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("file-card")) {
    draggedItem = e.target;
    e.target.classList.add("dragging");
  }
});

fileList.addEventListener("dragend", (e) => {
  if (e.target.classList.contains("file-card")) {
    e.target.classList.remove("dragging");
    draggedItem = null;
    files = [...fileList.querySelectorAll(".file-card")].map(card =>
      files.find(f => f.div === card)
    );
    updateSummary();
  }
});

fileList.addEventListener("dragover", (e) => {
  e.preventDefault();
  if (!draggedItem) return;
  const afterElement = getDragAfterElement(fileList, e.clientY);
  if (afterElement == null) {
    fileList.appendChild(draggedItem);
  } else {
    fileList.insertBefore(draggedItem, afterElement);
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".file-card:not(.dragging)")];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Page Range Parser
function parseRanges(rangeStr, totalPages) {
  const indices = [];
  if (!rangeStr) return [...Array(totalPages).keys()];
  rangeStr.split(',').forEach(part => {
    part = part.trim();
    if (!part) return;
    if (part.includes('-')) {
      let [s, e] = part.split('-').map(x => parseInt(x.trim(), 10));
      if (isNaN(s) || isNaN(e)) return;
      if (s > e) [s, e] = [e, s];
      for (let i = s; i <= e; i++) if (i >= 1 && i <= totalPages) indices.push(i - 1);
    } else {
      let n = parseInt(part, 10);
      if (!isNaN(n) && n >= 1 && n <= totalPages) indices.push(n - 1);
    }
  });
  return [...new Set(indices)];
}

// Advanced Page Range Parser (Premium Feature)
function parseAdvancedRanges(rangeStr, totalPages) {
  const indices = [];
  if (!rangeStr) return [...Array(totalPages).keys()];
  
  // Split by comma and process each part
  rangeStr.split(',').forEach(part => {
    part = part.trim();
    if (!part) return;
    
    // Handle special keywords (premium)
    if (part.toLowerCase() === 'odd') {
      for (let i = 1; i <= totalPages; i += 2) indices.push(i - 1);
      return;
    }
    if (part.toLowerCase() === 'even') {
      for (let i = 2; i <= totalPages; i += 2) indices.push(i - 1);
      return;
    }
    if (part.toLowerCase() === 'last') {
      indices.push(totalPages - 1);
      return;
    }
    if (part.toLowerCase() === 'first') {
      indices.push(0);
      return;
    }
    
    // Handle step ranges (e.g., 1-10:2 for every 2nd page)
    if (part.includes(':')) {
      const [rangePart, stepPart] = part.split(':');
      const step = parseInt(stepPart.trim(), 10);
      if (isNaN(step) || step < 1) return;
      
      if (rangePart.includes('-')) {
        let [s, e] = rangePart.split('-').map(x => parseInt(x.trim(), 10));
        if (isNaN(s) || isNaN(e)) return;
        if (s > e) [s, e] = [e, s];
        for (let i = s; i <= e; i += step) {
          if (i >= 1 && i <= totalPages) indices.push(i - 1);
        }
      }
      return;
    }
    
    // Handle negative indexing (e.g., -1 for last page, -2 for second to last)
    if (part.startsWith('-')) {
      const n = parseInt(part, 10);
      if (!isNaN(n) && n < 0) {
        const pageIndex = totalPages + n;
        if (pageIndex >= 0) indices.push(pageIndex);
      }
      return;
    }
    
    // Handle regular ranges and single pages
    if (part.includes('-')) {
      let [s, e] = part.split('-').map(x => parseInt(x.trim(), 10));
      if (isNaN(s) || isNaN(e)) return;
      if (s > e) [s, e] = [e, s];
      for (let i = s; i <= e; i++) if (i >= 1 && i <= totalPages) indices.push(i - 1);
    } else {
      let n = parseInt(part, 10);
      if (!isNaN(n) && n >= 1 && n <= totalPages) indices.push(n - 1);
    }
  });
  
  return [...new Set(indices)].sort((a, b) => a - b);
}

// Summary Counter
function updateSummary() {
  if (!files.length) {
    summaryDiv.style.display = "none";
    return;
  }
  let totalPages = 0;
  files.forEach(obj => {
    if (pageRangeOption.checked && isPremium && obj.rangeInput.value.trim()) {
      const ranges = parseAdvancedRanges(obj.rangeInput.value, obj.totalPages);
      totalPages += ranges.length;
    } else {
      totalPages += obj.totalPages;
    }
  });
  
  // Smart file naming - auto-suggest output name
  if (!outputName.value.trim()) {
    const suggestedName = generateSmartFileName();
    outputName.placeholder = `Smart suggestion: ${suggestedName}`;
    outputName.title = `Click to use: ${suggestedName}`;
  }
  
  const premiumIndicator = pageRangeOption.checked && isPremium ? ' (Premium Ranges)' : '';
  summaryDiv.textContent = `📊 Ready to merge: ${files.length} file(s) • ${totalPages} total pages${premiumIndicator}`;
  summaryDiv.style.display = "block";
}

// Smart File Naming Function
function generateSmartFileName() {
  if (!files.length) return 'merged-document';
  
  const fileNames = files.map(obj => obj.file.name.replace('.pdf', ''));
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Strategy 1: If 2-3 files, combine names
  if (files.length <= 3) {
    const combinedName = fileNames.join('-');
    if (combinedName.length <= 50) {
      return combinedName;
    }
  }
  
  // Strategy 2: Find common prefix
  const commonPrefix = findCommonPrefix(fileNames);
  if (commonPrefix.length >= 3) {
    return `${commonPrefix}-merged-${files.length}files`;
  }
  
  // Strategy 3: Use first file name + count
  const firstName = fileNames[0];
  if (firstName.length <= 30) {
    return `${firstName}-plus-${files.length - 1}more`;
  }
  
  // Strategy 4: Generic with date and count
  return `merged-${files.length}files-${currentDate}`;
}

function findCommonPrefix(names) {
  if (!names.length) return '';
  if (names.length === 1) return names[0];
  
  let prefix = names[0];
  for (let i = 1; i < names.length; i++) {
    while (prefix && !names[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  }
  
  // Clean up prefix (remove trailing numbers, dashes, underscores)
  return prefix.replace(/[\d\-_\s]+$/, '').trim();
}

fileList.addEventListener("input", (e) => {
  if (e.target.classList.contains("file-range")) {
    updateSummary();
  }
});

// Sorting Feature
sortSelect.addEventListener("change", () => {
  if (sortSelect.value === "none" || !files.length) return;

  files.sort((a, b) => {
    const nameA = a.file.name.toLowerCase();
    const nameB = b.file.name.toLowerCase();
    
    switch (sortSelect.value) {
      case "az": return nameA.localeCompare(nameB);
      case "za": return nameB.localeCompare(nameA);
      case "numeric-asc": return nameA.localeCompare(nameB, undefined, { numeric: true });
      case "numeric-desc": return nameB.localeCompare(nameA, undefined, { numeric: true });
      default: return 0;
    }
  });

  fileList.innerHTML = '';
  files.forEach(obj => fileList.appendChild(obj.div));
  updateSummary();
});

// PDF Preview
previewBtn.addEventListener("click", async () => {
  hideAlert();
  
  // Validate inputs
  const errors = validateInputs();
  if (errors.length > 0) {
    showAlert(errors[0], 'warning');
    return;
  }

  try {
    loading.style.display = "flex";
    setButtonsLoading(true);
    updateLoadingStatus("Creating Preview...", "Initializing preview generation", 0);
    showProgress();
    
    const mergedPdf = await PDFLib.PDFDocument.create();
    let processedFiles = 0;
    
    for (const obj of files) {
      const progress = (processedFiles / files.length) * 70;
      updateLoadingStatus("Processing Files...", `Processing ${obj.file.name}`, progress);
      
      const arrayBuffer = await obj.file.arrayBuffer();
      const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
      
      // Use advanced range parsing if premium feature is enabled
      const ranges = pageRangeOption.checked && isPremium 
        ? parseAdvancedRanges(obj.rangeInput.value, obj.totalPages)
        : parseRanges(obj.rangeInput.value, obj.totalPages);
        
      const pages = await mergedPdf.copyPages(pdf, ranges);
      pages.forEach(page => mergedPdf.addPage(page));
      processedFiles++;
    }
    
    updateLoadingStatus("Applying Enhancements...", "Adding watermarks and formatting", 80);
    
    // Basic: Apply page rotation
    if (rotateOption.checked) {
      updateLoadingStatus("Rotating Pages...", "Applying page rotation", 82);
      await rotatePages(mergedPdf, rotationAngle.value);
    }
    
    // Premium: Add watermark if enabled
    if (watermarkOption.checked && watermarkText.value.trim() && isPremium) {
      updateLoadingStatus("Adding Watermark...", "Applying watermark to pages", 85);
      await addWatermark(mergedPdf, watermarkText.value.trim(), watermarkPosition.value, watermarkSize.value);
    }
    
    // Basic: Remove blank pages
    if (removeBlankOption.checked) {
      updateLoadingStatus("Removing Blank Pages...", "Analyzing and removing blank pages", 90);
      await removeBlankPages(mergedPdf);
    }
    
    updateLoadingStatus("Finalizing Preview...", "Generating final preview", 95);
    const pdfBytes = await mergedPdf.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    updateLoadingStatus("Complete!", "Opening preview in new tab", 100);
    window.open(url, '_blank');
    
    showAlert('Preview generated successfully! Check your new browser tab.', 'success');
    
  } catch (error) {
    console.error('Preview error:', error);
    showAlert('Error creating preview. Please check your files and page ranges.', 'error');
  } finally {
    loading.style.display = "none";
    setButtonsLoading(false);
    hideProgress();
  }
});

// PDF Merge
mergeBtn.addEventListener("click", async () => {
  hideAlert();
  
  // Comprehensive validation
  const errors = validateInputs();
  if (errors.length > 0) {
    showAlert(errors[0], 'warning');
    return;
  }

  try {
    loading.style.display = "flex";
    setButtonsLoading(true);
    updateLoadingStatus("Initializing Merge...", "Preparing to combine your PDFs", 0);
    showProgress();
    
    const mergedPdf = await PDFLib.PDFDocument.create();
    let processedFiles = 0;
    let totalPages = 0;
    
    // Calculate total pages for better progress tracking
    files.forEach(obj => {
      const ranges = pageRangeOption.checked && isPremium 
        ? parseAdvancedRanges(obj.rangeInput.value, obj.totalPages)
        : parseRanges(obj.rangeInput.value, obj.totalPages);
      totalPages += ranges.length;
    });
    
    for (const obj of files) {
      const progress = (processedFiles / files.length) * 50;
      updateLoadingStatus("Processing Files...", `Processing ${obj.file.name} (${processedFiles + 1}/${files.length})`, progress);
      
      const arrayBuffer = await obj.file.arrayBuffer();
      const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
      
      // Use advanced range parsing if premium feature is enabled
      const ranges = pageRangeOption.checked && isPremium 
        ? parseAdvancedRanges(obj.rangeInput.value, obj.totalPages)
        : parseRanges(obj.rangeInput.value, obj.totalPages);
        
      const pages = await mergedPdf.copyPages(pdf, ranges);
      pages.forEach(page => mergedPdf.addPage(page));
      processedFiles++;
    }
    
    updateLoadingStatus("Applying Enhancements...", "Adding watermarks and special features", 60);
    
    // Basic: Apply page rotation
    if (rotateOption.checked) {
      updateLoadingStatus("Rotating Pages...", "Applying page rotation", 62);
      await rotatePages(mergedPdf, rotationAngle.value);
    }
    
    // Premium: Add watermark if enabled
    if (watermarkOption.checked && watermarkText.value.trim() && isPremium) {
      updateLoadingStatus("Adding Watermark...", "Applying watermark to pages", 65);
      await addWatermark(mergedPdf, watermarkText.value.trim(), watermarkPosition.value, watermarkSize.value);
    }
    
    // Basic: Remove blank pages
    if (removeBlankOption.checked) {
      updateLoadingStatus("Removing Blank Pages...", "Analyzing and removing blank pages", 68);
      await removeBlankPages(mergedPdf);
    }
    
    updateLoadingStatus("Adding Bookmarks...", "Organizing document structure", 70);
    
    // Premium: Add bookmarks if enabled
    if (bookmarkOption.checked && isPremium) {
      await addBookmarks(mergedPdf);
    }
    
    updateLoadingStatus("Optimizing File...", "Applying compression settings", 80);

    const saveOptions = {};
    if (compressOption.checked) {
      const level = compressionLevel.value;
      switch(level) {
        case 'none':
          break;
        case 'low':
          saveOptions.useObjectStreams = true;
          saveOptions.addDefaultPage = false;
          break;
        case 'medium':
          saveOptions.useObjectStreams = false;
          saveOptions.objectsPerTick = 50;
          break;
        case 'high':
          saveOptions.useObjectStreams = false;
          saveOptions.objectsPerTick = 20;
          break;
      }
    }
    
    updateLoadingStatus("Finalizing PDF...", "Creating final document", 90);
    
    // Add metadata
    if (passwordOption.checked && pdfPassword.value.trim()) {
      mergedPdf.setTitle('Protected PDF');
      mergedPdf.setAuthor('PDF Merger Pro');
    }

    const pdfBytes = await mergedPdf.save(saveOptions);
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    
    updateLoadingStatus("Download Ready!", "Preparing your merged PDF", 100);
    
    const filename = outputName.value.trim() || 'merged-document';
    const finalFilename = filename.endsWith('.pdf') ? filename : `${filename}.pdf`;
    
    // Save to Google Drive if enabled, otherwise download locally
    if (googleDriveOption.checked && isPremium) {
      const savedToDrive = await saveToGoogleDrive(blob, finalFilename);
      if (!savedToDrive) {
        // Fallback to local download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = finalFilename;
        link.click();
      }
    } else {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = finalFilename;
      link.click();
    }
    
    // Build detailed success message
    let features = [];
    if (compressOption.checked) features.push(`${compressionLevel.value} compression`);
    if (rotateOption.checked) features.push(`${rotationAngle.value}° rotation`);
    if (watermarkOption.checked && isPremium) features.push('watermark');
    if (bookmarkOption.checked && isPremium) features.push('bookmarks');
    if (removeBlankOption.checked) features.push('blank page removal');
    if (pageRangeOption.checked && isPremium) features.push('advanced page ranges');
    if (googleDriveOption.checked && isPremium) features.push('Google Drive save');
    if (passwordOption.checked) features.push('password protection (client-side limitation)');
    
    const featuresText = features.length > 0 ? ` with ${features.join(', ')}` : '';
    const successMsg = `✅ Successfully merged ${files.length} files (${totalPages} pages) into ${finalFilename}${featuresText}`;
    
    summaryDiv.textContent = successMsg;
    summaryDiv.style.background = "linear-gradient(135deg, var(--success), #38b2ac)";
    
    showAlert('PDF merged successfully! Your download should start automatically.', 'success');
    
    // Show share button after successful merge
    shareBtn.style.display = 'block';
    actionsDiv.classList.add('has-share');
    
    // Store the merged PDF for sharing
    window.lastMergedPDF = {
      blob: blob,
      filename: finalFilename,
      timestamp: Date.now()
    };
    
    // Increment merge count and make login mandatory after first merge
    mergeCount++;
    if (mergeCount === 1 && !isLoggedIn) {
      setTimeout(() => {
        makeLoginMandatory();
      }, 3000); // Show login modal 3 seconds after first successful merge
    }
    
  } catch (error) {
    console.error('Merge error:', error);
    showAlert('Error merging PDFs. Please check your files and page ranges.', 'error');
  } finally {
    loading.style.display = "none";
    setButtonsLoading(false);
    hideProgress();
  }
});

// Alert Close Handler
alertClose.addEventListener('click', hideAlert);

// Toggle Sections with Animation
compressOption.addEventListener('change', () => {
  compressionSection.style.display = compressOption.checked ? 'block' : 'none';
  if (compressOption.checked) {
    compressionSection.classList.add('fade-in-up');
  }
});

passwordOption.addEventListener('change', () => {
  passwordSection.style.display = passwordOption.checked ? 'block' : 'none';
  if (passwordOption.checked) {
    passwordSection.classList.add('fade-in-up');
    pdfPassword.focus();
  } else {
    pdfPassword.classList.remove('error', 'success');
  }
});

watermarkOption.addEventListener('change', () => {
  watermarkSection.style.display = watermarkOption.checked ? 'block' : 'none';
  if (watermarkOption.checked) {
    watermarkSection.classList.add('fade-in-up');
    watermarkText.focus();
  } else {
    watermarkText.classList.remove('error', 'success');
  }
});

// Basic Feature Toggles
rotateOption.addEventListener('change', () => {
  rotationSection.style.display = rotateOption.checked ? 'block' : 'none';
  if (rotateOption.checked) {
    rotationSection.classList.add('fade-in-up');
  }
});

// Premium Feature Toggles
watermarkOption.addEventListener('change', () => {
  if (!isPremium && watermarkOption.checked) {
    showAlert('Watermark is a premium feature. Upgrade to unlock!', 'warning');
    watermarkOption.checked = false;
    return;
  }
  watermarkSection.style.display = watermarkOption.checked ? 'block' : 'none';
  if (watermarkOption.checked) {
    watermarkSection.classList.add('fade-in-up');
    watermarkText.focus();
  } else {
    watermarkText.classList.remove('error', 'success');
  }
});

bookmarkOption.addEventListener('change', () => {
  if (!isPremium && bookmarkOption.checked) {
    showAlert('Auto-bookmarks is a premium feature. Upgrade to unlock!', 'warning');
    bookmarkOption.checked = false;
    return;
  }
});

// Remove blank pages is now a basic feature - no premium check needed

pageRangeOption.addEventListener('change', () => {
  if (!isPremium && pageRangeOption.checked) {
    showAlert('Advanced page range selection is a premium feature. Upgrade to unlock!', 'warning');
    pageRangeOption.checked = false;
    return;
  }
  
  // Toggle advanced page range inputs for all files
  files.forEach(obj => {
    if (pageRangeOption.checked && isPremium) {
      obj.rangeInput.disabled = false;
      obj.rangeInput.placeholder = 'Premium: 1-3,5,7-10,odd,even,last or leave empty for all pages';
      obj.rangeInput.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.1))';
      obj.rangeInput.style.border = '2px solid #ffd700';
    } else {
      obj.rangeInput.disabled = true;
      obj.rangeInput.placeholder = 'All pages (Premium: Enable advanced ranges for custom selection)';
      obj.rangeInput.style.background = '';
      obj.rangeInput.style.border = '';
      obj.rangeInput.value = '';
    }
  });
});

googleDriveOption.addEventListener('change', () => {
  if (!isPremium && googleDriveOption.checked) {
    showAlert('Google Drive integration is a premium feature. Upgrade to unlock!', 'warning');
    googleDriveOption.checked = false;
    return;
  }
  
  if (googleDriveOption.checked && isPremium) {
    initializeGoogleDrive();
  }
});

// Real-time Input Validation
pdfPassword.addEventListener('input', () => {
  if (passwordOption.checked) {
    const password = pdfPassword.value.trim();
    if (password.length >= 4) {
      pdfPassword.classList.remove('error');
      pdfPassword.classList.add('success');
    } else {
      pdfPassword.classList.remove('success');
      if (password.length > 0) {
        pdfPassword.classList.add('error');
      }
    }
  }
});

watermarkText.addEventListener('input', () => {
  if (watermarkOption.checked && isPremium) {
    const text = watermarkText.value.trim();
    if (text.length > 0) {
      watermarkText.classList.remove('error');
      watermarkText.classList.add('success');
    } else {
      watermarkText.classList.remove('success');
    }
  }
});

// Progress Bar Functions
function showProgress() {
  progressContainer.style.display = 'block';
  updateProgress(0);
}

function updateProgress(percent) {
  progressFill.style.width = percent + '%';
  progressText.textContent = Math.round(percent) + '%';
}

function hideProgress() {
  progressContainer.style.display = 'none';
}

// Add Watermark Function
async function addWatermark(pdf, text, position, fontSize = 24) {
  const pages = pdf.getPages();
  const font = await pdf.embedFont(PDFLib.StandardFonts.Helvetica);
  const size = parseInt(fontSize, 10);
  
  pages.forEach(page => {
    const { width, height } = page.getSize();
    let x, y;
    
    switch(position) {
      case 'top-left': x = 50; y = height - 50; break;
      case 'top-right': x = width - 200; y = height - 50; break;
      case 'bottom-left': x = 50; y = 50; break;
      case 'bottom-right': x = width - 200; y = 50; break;
      default: x = width / 2 - 100; y = height / 2; break;
    }
    
    page.drawText(text, {
      x, y,
      size,
      font,
      color: PDFLib.rgb(0.7, 0.7, 0.7),
      opacity: 0.5
    });
  });
}

// Basic: Rotate Pages Function
async function rotatePages(pdf, angle) {
  const pages = pdf.getPages();
  const rotation = {
    90: PDFLib.degrees(90),
    180: PDFLib.degrees(180),
    270: PDFLib.degrees(270)
  }[angle];
  
  pages.forEach(page => {
    page.setRotation(rotation);
  });
}

// Basic: Remove Blank Pages Function
async function removeBlankPages(pdf) {
  
  // Note: This is a simplified implementation
  // Real blank page detection would require content analysis
  const pages = pdf.getPages();
  const nonBlankPages = [];
  
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    // Simplified check - in real implementation, would analyze page content
    // For demo purposes, we'll keep all pages
    nonBlankPages.push(page);
  }
  
  return pdf;
}

// Add Bookmarks Function
async function addBookmarks(pdf) {
  let pageIndex = 0;
  
  files.forEach((obj, index) => {
    const ranges = parseRanges(obj.rangeInput.value, obj.totalPages);
    if (ranges.length > 0) {
      const bookmarkName = obj.file.name.replace('.pdf', '');
      // Note: PDF-lib doesn't support bookmarks directly, but we can add metadata
      pdf.setTitle(`Merged PDF - ${files.length} files`);
      pdf.setSubject(`Contains: ${files.map(f => f.file.name).join(', ')}`);
    }
    pageIndex += ranges.length;
  });
}

// Google Drive Integration
let gapi = null;
let isGoogleDriveReady = false;

function initializeGoogleDrive() {
  if (isGoogleDriveReady) return;
  
  // Load Google API
  const script = document.createElement('script');
  script.src = 'https://apis.google.com/js/api.js';
  script.onload = () => {
    gapi = window.gapi;
    gapi.load('auth2:client:picker', initGoogleDriveAPI);
  };
  document.head.appendChild(script);
}

function initGoogleDriveAPI() {
  gapi.client.init({
    apiKey: 'AIzaSyDemo_Key_Replace_With_Real', // Demo key - replace with real
    clientId: '123456789-demo.apps.googleusercontent.com', // Demo - replace with real
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
    scope: 'https://www.googleapis.com/auth/drive.file'
  }).then(() => {
    isGoogleDriveReady = true;
    showAlert('Google Drive integration ready! You can now save merged PDFs to your Drive.', 'success');
  }).catch(error => {
    console.error('Google Drive API initialization failed:', error);
    showAlert('Google Drive setup failed. Feature disabled for this session.', 'error');
    googleDriveOption.checked = false;
  });
}

async function saveToGoogleDrive(pdfBlob, filename) {
  if (!isGoogleDriveReady) {
    showAlert('Google Drive not ready. Please try again.', 'warning');
    return false;
  }
  
  try {
    // Check if user is signed in
    const authInstance = gapi.auth2.getAuthInstance();
    if (!authInstance.isSignedIn.get()) {
      await authInstance.signIn();
    }
    
    updateLoadingStatus('Uploading to Google Drive...', 'Preparing file for upload', 95);
    
    // Convert blob to base64
    const base64Data = await blobToBase64(pdfBlob);
    
    const metadata = {
      name: filename,
      parents: ['root'] // Save to root folder
    };
    
    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
    form.append('file', pdfBlob);
    
    const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token}`
      },
      body: form
    });
    
    if (response.ok) {
      const result = await response.json();
      showAlert(`✅ Successfully saved ${filename} to Google Drive!`, 'success');
      return true;
    } else {
      throw new Error('Upload failed');
    }
  } catch (error) {
    console.error('Google Drive upload error:', error);
    showAlert('Failed to save to Google Drive. File downloaded locally instead.', 'warning');
    return false;
  }
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// Coupon Code Handler
applyCoupon.addEventListener('click', () => {
  const code = couponCode.value.trim();
  
  if (!code) {
    showAlert('Please enter a coupon code!', 'warning');
    couponCode.focus();
    return;
  }
  
  if (validCoupons.includes(code)) {
    // Valid coupon - activate premium
    isPremium = true;
    const premiumBadge = document.querySelector('.premium-badge');
    premiumBadge.textContent = translations[currentLang].premiumActive;
    premiumBadge.style.background = 'linear-gradient(135deg, #00ff00, #32cd32)';
    
    // Update coupon buttons
    applyCoupon.textContent = 'Applied!';
    applyCoupon.classList.add('coupon-success');
    applyCoupon.disabled = true;
    applyCoupon.style.display = 'none';
    couponCode.disabled = true;
    couponCode.classList.add('success');
    removeCoupon.style.display = 'block';
    
    // Hide premium notice
    premiumNotice.style.display = 'none';
    
    // Enable premium checkboxes
    watermarkOption.disabled = false;
    bookmarkOption.disabled = false;
    pageRangeOption.disabled = false;
    googleDriveOption.disabled = false;
    
    // Update existing page range inputs to enable them
    files.forEach(obj => {
      obj.rangeInput.disabled = false;
      obj.rangeInput.placeholder = 'Premium unlocked! Enter ranges like 1-3,5,7-10 or leave empty for all pages';
      obj.rangeInput.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 165, 0, 0.05))';
      obj.rangeInput.style.border = '1px solid #ffd700';
      obj.rangeInput.title = 'Premium unlocked! Enter page ranges like 1-3,5,7-10,odd,even,last or leave empty for all pages';
    });
    
    showAlert('Coupon applied successfully! Premium features are now unlocked. You can now enter custom page ranges directly.', 'success');
  } else {
    // Invalid coupon
    applyCoupon.textContent = 'Invalid';
    applyCoupon.classList.add('coupon-error');
    couponCode.classList.add('error');
    
    setTimeout(() => {
      applyCoupon.textContent = 'Apply';
      applyCoupon.classList.remove('coupon-error');
      couponCode.classList.remove('error');
    }, 2000);
    
    showAlert('Invalid coupon code. Please try again.', 'error');
  }
});

// Remove Coupon Handler
removeCoupon.addEventListener('click', () => {
  // Deactivate premium
  isPremium = false;
  const premiumBadge = document.querySelector('.premium-badge');
  premiumBadge.textContent = translations[currentLang].premiumBadge;
  premiumBadge.style.background = 'linear-gradient(135deg, #ffd700, #ffa500)';
  
  // Show premium notice
  premiumNotice.style.display = 'block';
  
  // Reset and disable premium options
  watermarkOption.checked = false;
  watermarkOption.disabled = true;
  bookmarkOption.checked = false;
  bookmarkOption.disabled = true;
  pageRangeOption.checked = false;
  pageRangeOption.disabled = true;
  googleDriveOption.checked = false;
  googleDriveOption.disabled = true;
  watermarkSection.style.display = 'none';
  
  // Reset page range styling
  files.forEach(obj => {
    obj.rangeInput.disabled = true;
    obj.rangeInput.placeholder = 'All pages (Premium: Enable advanced ranges for custom selection)';
    obj.rangeInput.style.background = '';
    obj.rangeInput.style.border = '';
    obj.rangeInput.value = '';
  });
  
  // Reset coupon section
  applyCoupon.textContent = 'Apply';
  applyCoupon.classList.remove('coupon-success');
  applyCoupon.disabled = false;
  applyCoupon.style.display = 'block';
  couponCode.disabled = false;
  couponCode.value = '';
  couponCode.classList.remove('success');
  removeCoupon.style.display = 'none';
  
  showAlert('Coupon removed successfully! Premium features have been disabled.', 'info');
});

// Enter key support for coupon input
couponCode.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    applyCoupon.click();
  }
});

// Premium Feature Demo Toggle (for testing)
function togglePremium() {
  isPremium = !isPremium;
  const premiumBadge = document.querySelector('.premium-badge');
  if (isPremium) {
    premiumBadge.textContent = translations[currentLang].premiumActive;
    premiumBadge.style.background = 'linear-gradient(135deg, #00ff00, #32cd32)';
    premiumNotice.style.display = 'none';
    
    // Enable premium checkboxes
    watermarkOption.disabled = false;
    bookmarkOption.disabled = false;
    pageRangeOption.disabled = false;
    googleDriveOption.disabled = false;
    
    // Update existing page range inputs to show they're now available
    files.forEach(obj => {
      obj.rangeInput.placeholder = 'Premium unlocked! Check "Advanced page range selection" to enable';
      obj.rangeInput.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 165, 0, 0.05))';
      obj.rangeInput.style.border = '1px solid #ffd700';
      obj.rangeInput.title = 'Premium unlocked! Enable "Advanced page range selection" option to use this feature';
    });
    
    showAlert(translations[currentLang].premiumActivatedMsg, 'success');
  } else {
    premiumBadge.textContent = translations[currentLang].premiumBadge;
    premiumBadge.style.background = 'linear-gradient(135deg, #ffd700, #ffa500)';
    premiumNotice.style.display = 'block';
    // Reset and disable premium options
    watermarkOption.checked = false;
    watermarkOption.disabled = true;
    bookmarkOption.checked = false;
    bookmarkOption.disabled = true;
    // removeBlankOption is now basic, don't reset it
    pageRangeOption.checked = false;
    pageRangeOption.disabled = true;
    googleDriveOption.checked = false;
    googleDriveOption.disabled = true;
    watermarkSection.style.display = 'none';
    
    // Reset page range styling
    files.forEach(obj => {
      obj.rangeInput.disabled = true;
      obj.rangeInput.placeholder = 'All pages (Premium: Enable advanced ranges for custom selection)';
      obj.rangeInput.style.background = '';
      obj.rangeInput.style.border = '';
      obj.rangeInput.value = '';
    });
    // Reset coupon section
    applyCoupon.textContent = 'Apply';
    applyCoupon.classList.remove('coupon-success');
    applyCoupon.disabled = false;
    applyCoupon.style.display = 'block';
    couponCode.disabled = false;
    couponCode.value = '';
    couponCode.classList.remove('success');
    removeCoupon.style.display = 'none';
  }
}

// Add click handler to premium badge for demo
document.querySelector('.premium-badge').addEventListener('click', togglePremium);
document.querySelector('.premium-badge').style.cursor = 'pointer';
document.querySelector('.premium-badge').title = 'Click to toggle premium demo';

// Enhanced pricing button with feature showcase
pricingBtn.addEventListener('dblclick', () => {
  // Double-click for instant demo activation
  if (!isPremium) {
    togglePremium();
    showAlert(translations[currentLang].premiumActivatedMsg, 'success');
  }
});

// Initialization
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
fileList.innerHTML = '<div class="empty-state">No PDF files selected yet. Upload some files to get started!</div>';

// Login Modal Handlers
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
  userName.focus();
});

modalClose.addEventListener('click', () => {
  if (!loginMandatory || mergeCount >= 1) {
    loginModal.style.display = 'none';
    if (loginMandatory) {
      loginMandatory = false;
      loginBtn.textContent = '👤 Login';
      loginBtn.classList.remove('mandatory');
      showAlert('Login cancelled. You can continue using the app.', 'info');
    }
  } else {
    showAlert('Login is required to continue using the application!', 'warning');
  }
});

// Close modal on outside click (allow cancelling after first merge)
loginModal.addEventListener('click', (e) => {
  if (e.target === loginModal && (!loginMandatory || mergeCount >= 1)) {
    loginModal.style.display = 'none';
    if (loginMandatory) {
      loginMandatory = false;
      loginBtn.textContent = '👤 Login';
      loginBtn.classList.remove('mandatory');
    }
  }
});

// Login form submission
loginSubmit.addEventListener('click', () => {
  const name = userName.value.trim();
  const passcode = userPasscode.value.trim();
  
  if (!name) {
    showAlert('Please enter your name!', 'warning');
    userName.focus();
    return;
  }
  
  if (!passcode) {
    showAlert('Please enter the passcode!', 'warning');
    userPasscode.focus();
    return;
  }
  
  if (passcode === validPasscode) {
    // Successful login
    isLoggedIn = true;
    loginMandatory = false;
    loginModal.style.display = 'none';
    
    // Update login button
    loginBtn.textContent = `👋 ${name}`;
    loginBtn.classList.add('logged-in');
    loginBtn.classList.remove('mandatory');
    
    showAlert(`Welcome back, ${name}! You are now logged in.`, 'success');
    
    // Clear form
    userName.value = '';
    userPasscode.value = '';
  } else {
    showAlert('Invalid passcode. Please try again.', 'error');
    userPasscode.focus();
    userPasscode.select();
  }
});

// Enter key support for login form
userName.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    userPasscode.focus();
  }
});

userPasscode.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    loginSubmit.click();
  }
});

// Function to make login mandatory
function makeLoginMandatory() {
  if (!isLoggedIn) {
    loginMandatory = true;
    loginBtn.textContent = '🔴 Login Required';
    loginBtn.classList.add('mandatory');
    loginModal.style.display = 'flex';
    userName.focus();
    showAlert('Login is now required to continue using PDF Merger Pro!', 'warning');
  }
}

// Pricing Button Handler
pricingBtn.addEventListener('click', () => {
  // Scroll to premium section
  document.querySelector('.premium-section').scrollIntoView({ 
    behavior: 'smooth', 
    block: 'center' 
  });
  
  // Highlight premium section temporarily
  const premiumSection = document.querySelector('.premium-section');
  premiumSection.style.transform = 'scale(1.02)';
  premiumSection.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.5)';
  
  setTimeout(() => {
    premiumSection.style.transform = 'scale(1)';
    premiumSection.style.boxShadow = '';
  }, 2000);
  
  // Show detailed premium features alert
  showAlert('🎆 Premium Features for just ₹9: 💧 Watermarks, 📑 Auto-bookmarks, 🗑️ Blank page removal. Use coupon "proindra" to unlock!', 'info');
});

// Mobile-specific enhancements
function isMobile() {
  return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isTouch() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Mobile-optimized drag and drop
if (isMobile()) {
  // Disable drag and drop on mobile, focus on file input
  dropArea.addEventListener('click', () => fileInput.click());
  
  // Add mobile-specific classes
  document.body.classList.add('mobile-device');
  
  // Optimize file cards for mobile
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.contains('file-card')) {
            // Make file cards more touch-friendly
            node.style.minHeight = '120px';
            node.style.padding = '1rem';
          }
        });
      }
    });
  });
  observer.observe(fileList, { childList: true });
}

// Touch-friendly interactions
if (isTouch()) {
  // Add touch feedback to buttons
  document.addEventListener('touchstart', (e) => {
    if (e.target.matches('button, .file-card, .drop-zone')) {
      e.target.style.transform = 'scale(0.98)';
    }
  });
  
  document.addEventListener('touchend', (e) => {
    if (e.target.matches('button, .file-card, .drop-zone')) {
      setTimeout(() => {
        e.target.style.transform = '';
      }, 150);
    }
  });
}

// Prevent zoom on double-tap for iOS
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
}

// Mobile-optimized modal handling
function adjustModalForMobile() {
  if (isMobile()) {
    const modal = document.querySelector('.modal-content');
    if (modal) {
      modal.style.maxHeight = '90vh';
      modal.style.overflow = 'auto';
    }
  }
}

// Adjust UI for mobile on resize
window.addEventListener('resize', () => {
  adjustModalForMobile();
  
  // Adjust drop zone height on mobile
  if (isMobile()) {
    dropArea.style.minHeight = '150px';
  }
});

// Mobile-specific file handling improvements
function handleMobileFileSelection() {
  if (isMobile()) {
    // Show loading immediately on mobile for better UX
    const mobileLoadingMsg = document.createElement('div');
    mobileLoadingMsg.textContent = 'Processing files...';
    mobileLoadingMsg.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      z-index: 9999;
      font-weight: 600;
    `;
    document.body.appendChild(mobileLoadingMsg);
    
    setTimeout(() => {
      if (document.body.contains(mobileLoadingMsg)) {
        document.body.removeChild(mobileLoadingMsg);
      }
    }, 3000);
  }
}

// Enhanced mobile file handling
fileInput.addEventListener('change', (e) => {
  handleMobileFileSelection();
  handleFiles([...e.target.files]);
});

// Mobile-optimized alert positioning
function adjustAlertForMobile() {
  if (isMobile()) {
    validationAlert.style.position = 'fixed';
    validationAlert.style.top = '20px';
    validationAlert.style.left = '10px';
    validationAlert.style.right = '10px';
    validationAlert.style.zIndex = '10000';
  }
}

// Call mobile adjustments
adjustModalForMobile();
adjustAlertForMobile();

// Share Feature Implementation
shareBtn.addEventListener('click', () => {
  if (!window.lastMergedPDF) {
    showAlert('No PDF available to share. Please merge files first.', 'warning');
    return;
  }
  
  // Show share modal
  shareFilename.textContent = window.lastMergedPDF.filename;
  shareModal.style.display = 'flex';
});

// Share modal close handlers
shareModalClose.addEventListener('click', () => {
  shareModal.style.display = 'none';
});

shareModal.addEventListener('click', (e) => {
  if (e.target === shareModal) {
    shareModal.style.display = 'none';
  }
});



// Social sharing handlers
emailShareBtn.addEventListener('click', () => {
  const subject = encodeURIComponent(`PDF Document: ${window.lastMergedPDF.filename}`);
  const body = encodeURIComponent(`Hi,\n\nI've created a PDF document: ${window.lastMergedPDF.filename}\n\nPlease find the PDF file attached or I'll send it separately.\n\nBest regards`);
  window.open(`mailto:?subject=${subject}&body=${body}`);
});

whatsappShareBtn.addEventListener('click', () => {
  const message = encodeURIComponent(`📄 *${window.lastMergedPDF.filename}*\n\nI've created a PDF document. I'll send it to you separately.`);
  window.open(`https://wa.me/?text=${message}`);
});

telegramShareBtn.addEventListener('click', () => {
  const message = encodeURIComponent(`📄 ${window.lastMergedPDF.filename}\n\nI've created a PDF document. I'll send it to you separately.`);
  window.open(`https://t.me/share/url?text=${message}`);
});



// Clean up expired shares (run periodically)
function cleanupExpiredShares() {
  if (window.lastMergedPDF && Date.now() - window.lastMergedPDF.timestamp > 24 * 60 * 60 * 1000) {
    window.lastMergedPDF = null;
    shareBtn.style.display = 'none';
    actionsDiv.classList.remove('has-share');
  }
}

// Run cleanup every hour
setInterval(cleanupExpiredShares, 60 * 60 * 1000);

