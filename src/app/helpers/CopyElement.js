export default function copyElemeny(value) {
    const el = document.createElement('textarea');
    el.setAttribute('readonly', '');
    el.value = value;
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}