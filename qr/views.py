from django.shortcuts import render
import qrcode

def generate_qr_code(request, data):
    img = qrcode.make(data)
    return render(request, 'qr_code.html', {'qr_code': img})
