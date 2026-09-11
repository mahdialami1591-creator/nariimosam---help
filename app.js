const faDigits = new Intl.NumberFormat("fa-IR", {
  minimumIntegerDigits: 2,
  useGrouping: false,
});

const faqs = [
  {
    question: "قوانین کلی فروشگاه چیه؟",
    answer:
      "فروشگاه نریموسام به‌صورت شخصی و توسط یک نفر مدیریت میشه؛ برای دریافت خدمات سریع‌تر لطفاً فقط برای خرید قطعی پیام بدید.\n\nقبل از سؤال درباره موجودی، کانال رو بررسی کنید. پیام‌های غیرضروری، مزاحمت، التماس یا قسم‌دادن باعث مسدودشدن کاربر میشه.",
  },
  {
    question: "چطور بفهمم اکانت موجوده؟",
    answer:
      "تمام اکانت‌های موجود با عکس و فیلم داخل کانال قرار گرفتن. هر اکانتی که هنوز کد داشته باشه، موجوده و فروخته نشده؛ بنابراین نیازی نیست موجودی اون رو جداگانه بپرسید.",
  },
  {
    question: "چطور اکانت بخرم؟",
    answer:
      "اگر اکانتی رو پسندیدی و آماده پرداخت هستی، کد اکانت رو به پی‌وی بفرست و شماره کارت بگیر. بعد از تأیید پرداخت، اطلاعات اکانت برات ارسال میشه.",
  },
  {
    question: "شرایط خرید قسطی چیه؟",
    answer:
      "ابتدا ۵۰ درصد قیمت اکانت به‌عنوان پیش‌پرداخت دریافت میشه و رمز جیمیل تحویل داده میشه. باقی مبلغ باید ماه بعد، در تاریخی که هنگام خرید ثبت میشه، پرداخت بشه. بعد از تسویه کامل، اکانت برای خریدار چنج میشه.",
  },
  {
    question: "پیش‌پرداخت چقدره؟",
    answer:
      "پیش‌پرداخت خرید قسطی، ۵۰ درصد قیمت اکانته. مثلاً برای یک اکانت ۲ میلیون تومانی، یک میلیون تومان ابتدا و یک میلیون تومان ماه بعد پرداخت میشه.",
  },
  {
    question: "بعد از پیش‌پرداخت چی تحویل می‌گیرم؟",
    answer:
      "بعد از پرداخت نصف مبلغ، رمز جیمیل اکانت بهت تحویل داده میشه. چنج و انتقال کامل اکانت بعد از پرداخت قسط دوم و تسویه کامل انجام میشه.",
  },
  {
    question: "قسط دوم رو چه زمانی پرداخت کنم؟",
    answer:
      "باقی‌مانده مبلغ باید ماه بعد پرداخت بشه. تاریخ دقیق پرداخت هنگام انجام معامله در چت ثبت و با خریدار هماهنگ میشه.",
  },
  {
    question: "اگر قسط دوم رو پرداخت نکنم چی؟",
    answer:
      "اگر قسط دوم در تاریخ تعیین‌شده پرداخت نشه، اکانت پس گرفته میشه و مبلغ پیش‌پرداخت، یعنی ۵۰ درصد قیمت اکانت، به خریدار برگردانده میشه.",
  },
  {
    question: "اکانت چه زمانی چنج میشه؟",
    answer:
      "چنج و انتقال کامل اکانت بعد از پرداخت تمام مبلغ و تسویه کامل انجام میشه.",
  },
  {
    question: "اگر اکانت رو پس بدم چقدر برمی‌گرده؟",
    answer:
      "اگر بعد از خرید بخوای اکانت رو پس بدی، ۳۰ درصد از مبلغ پرداختی بابت هزینه‌های مالیات، ادیت، چنج و تبلیغات کسر و ۷۰ درصد باقی‌مانده واریز میشه.\n\nمثال: از ۲ میلیون تومان پرداختی، ۶۰۰ هزار تومان کسر و یک میلیون و ۴۰۰ هزار تومان برگردانده میشه.",
  },
  {
    question: "اگر ورود به بازی رو بلد نباشم چی؟",
    answer:
      "اگر تازه‌کار هستی یا روش ورود به اکانت رو بلد نیستی، مشکلی نیست ♥️ بعد از خرید، روش ورود به بازی و استفاده از اکانت بهت آموزش داده میشه.",
  },
  {
    question: "اکانت سفارشی پیدا می‌کنید؟",
    answer:
      "خیر؛ امکان جست‌وجو و پیداکردن اکانت سفارشی برای مشتری وجود نداره. هر اکانت مناسبی که خریداری بشه، همراه با عکس، فیلم و مشخصات داخل کانال قرار می‌گیره.",
  },
  {
    question: "اگر برای اکانت مشکلی پیش بیاد چی؟",
    answer:
      "اگر برای ورود، جیمیل، رمز یا بخش‌های دیگه اکانت مشکلی پیش اومد، در روبیکا به آیدی رسمی فروشنده @nariimosam پیام بده تا مشکل بررسی بشه.",
  },
  {
    question: "چطور فروشنده اصلی رو تشخیص بدم؟",
    answer:
      "فقط از طریق آیدی روبیکای @nariimosam و شماره 09991871712 با فروشگاه در ارتباط باش. اگر فرد دیگه‌ای با اسم یا عکس فروشگاه پیام داد، هیچ مبلغی براش واریز نکن.",
  },
  {
    question: "راه ارتباط با فروشگاه چیه؟",
    answer:
      "برای خرید قطعی، کد اکانت موردنظرت رو در روبیکا به @nariimosam بفرست.\n\nشماره رسمی فروشگاه: 09991871712",
  },
];

const messages = document.querySelector("#messages");
const questionGrid = document.querySelector("#questionGrid");
const resetButton = document.querySelector("#resetChat");
const initialMarkup = messages.innerHTML;

function currentTime() {
  const now = new Date();
  return `${faDigits.format(now.getHours())}:${faDigits.format(now.getMinutes())}`;
}

function addMessage(text, type) {
  const row = document.createElement("div");
  row.className = `message-row message-row--${type}`;

  if (type === "bot") {
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = "N";
    row.appendChild(avatar);
  }

  const bubble = document.createElement("div");
  bubble.className = `message message--${type}`;

  const body = document.createElement("p");
  body.textContent = text;
  bubble.appendChild(body);

  const time = document.createElement("time");
  time.textContent = currentTime();
  bubble.appendChild(time);

  row.appendChild(bubble);
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
}

function answerQuestion(item, button) {
  addMessage(item.question, "user");
  button.disabled = true;

  window.setTimeout(() => {
    addMessage(item.answer, "bot");
    button.disabled = false;
  }, 180);
}

faqs.forEach((item) => {
  const button = document.createElement("button");
  button.className = "question-button";
  button.type = "button";
  button.textContent = item.question;
  button.addEventListener("click", () => answerQuestion(item, button));
  questionGrid.appendChild(button);
});

resetButton.addEventListener("click", () => {
  messages.innerHTML = initialMarkup;
  messages.scrollTop = 0;
});
