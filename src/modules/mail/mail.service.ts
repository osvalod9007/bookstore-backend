import { Injectable } from '@nestjs/common';
import { IMail } from './interfaces/mail.interface';
import * as fs from 'fs';
import { google } from 'googleapis';

@Injectable()
export class MailService {
  constructor() {}
}
