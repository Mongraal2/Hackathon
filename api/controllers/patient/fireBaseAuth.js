const admin = require("firebase-admin");

const secretAccessKey = {
  type: "service_account",
  project_id: "care-plus-356211",
  private_key_id: "a36d5bfa7df9d0f2db484d5aa5c87de9587774cb",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCRBytqcGExj9Ts\nZktnYw4/KlYgyjiC2laTUsbVypSrS0KmjDhy0UL3PLqSzePYeUa+ou5+zV3VVG/P\n26XYl7k0qkVjUEAtKtowrGrO22QtbF/137ovUp1k64JFOec6Q/88M6UiUj284bld\nJU2+z9oGwdPAZaaP8ZhMXgLBZqeDCI4GcZz8VZ3oxzubJ8McDVTU1ptilL+0SY9r\n5vGhls3IddihT0oSWuWLfgOn+2KSQLkI6OXgG7FLbRkjG1iydR4gqocdkxFAM3x+\nNUeq52plyFmMhuu6hNO0hutZLWeP9XxmAFcxhSSAsurBmmQsdqOqkV7NS8+eXUGt\nImtaHGdtAgMBAAECggEAA7YIQWAAzLDehPIVKd8aBTnDHHGwQoDtyDVNCzl01nFF\nkldyNlXufb8bExibpPVtfwFSUwJUTVosxkfblZBEV/mnbuQl0EIRdT9kOEja5mKo\njfUcoYtepa91FOpnZVFKHbNAnYE3PTcVdDG5LJHLBXM+ROUU/wfymrmpHmPPE4ZB\nowfCwXk4M5RzBq2khXY93reD6o8vwGfzkm3dClk7a/DLnaj8dWwnLOYLRSkZAfmp\na6tYWr5rrylY3/OqfHBRRNvBQre2226nICJCtpRcrSDG+I6a3vKtcv2ii5b5neEZ\nzuJfoA5iQMO8QKv1jCldqpf5AdDUt/kCTlIZKkY5oQKBgQDMtSCJY+bWkg+aBNS9\n0HIm6zB3tGyFQXbQvLx2bLqfvEvoiegeY546ejdoRQa2/jHBvRRwEO1EvYYoY8A8\nNHaLxpXdxzD4gpby4PuF8wGz6/+6EE/GCmeLhaelu2uJ8jOpd7sU54RmoUEo1b+/\ntxrstTabS4QuP9SjtxtC3mkKxQKBgQC1Xe0fAjm0cLjCinfHm3rrNZyUBZynz4d9\ncW1srAp4DuDib4t76nvaE69NMlsTOA8O6C7T1I79B0HDhDJJNCPdIBGXGXpu97HS\n66Fui+vuuuXDxAb++3EHNAyuTWHQqbUMe8CtifaejmMZooxMNMyNSkj21LIGTaF0\n/+OEBLlUiQKBgAObkZY6R4AylMnPGfy6Zrie3nzNljgG/lQRb3Ta17Mm+2N+wrN+\nZ/R54O4agVLKShAzB+AtvDDA8lNV5rZo6knuVwfQkeFfU8+1/VjP/pCwMRKTZQSF\nfGuuEFVQZ0XIGfb7oDVvGxs/7kkM81Mqo/PWAb9c5lh2UYYNHRLhnpJNAoGAAPAq\ncNWfHMrUedUjh3nLafoOBEn/JHMTXVe/3CcLqtFQ4nr3Or3cxCUD7B9Nj0zj7wzO\naTQZRT/LXEqLxAssAFHRJXnxQy+u0Mt9O0goAUUgOSIDc0AztnjTc/dcgSrPj+/3\n8C3dg7Zy1sgbd61yPWzb8cLp5NRz+Fn2gFFR8BkCgYEAlIq18Eic4FOrJ7qji392\nFlsr8SWuAW3a+TtR6cJqwWy4030bs/rmq6I5QtNc4Jro4K3isM7n7reEWce3BwmO\nlLWakxTo6Nm+YHx4vMv9xVYNw0ilDeTRK6ffNWeYIz23wgfpc8daf8XV+yKwuT9r\nRn0xN3dl+NbOEOopA8HOVZQ=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-zxip8@care-plus-356211.iam.gserviceaccount.com",
  client_id: "118317162692129381382",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zxip8%40care-plus-356211.iam.gserviceaccount.com",
};

admin.initializeApp({
  credential: admin.credential.cert(secretAccessKey),
});

exports.verifyFirebaseToken = async (tokenKey) => {
  try {
    const decodeValue = await admin.auth().verifyIdToken(tokenKey);
    if (decodeValue) {
      return decodeValue;
    }
    return "UnAuthorize";
  } catch (e) {
    // console.log(e);
    return e;
  }
};
